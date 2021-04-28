import { Either } from 'fp-ts/lib/Either';
import { TaskEither } from 'fp-ts/lib/TaskEither';
import { Task } from 'fp-ts/lib/Task';
import { State } from 'fp-ts/lib/State';
import * as O from 'fp-ts/lib/Option'
import * as TE from 'fp-ts/lib/TaskEither';
import * as IOR from 'fp-ts/lib/IORef';
import * as IO from 'fp-ts/lib/IO';
import { flow, pipe } from 'fp-ts/lib/function';
import { log } from 'fp-ts/lib/Console';

import { breakerClosed } from 'circuit-breaker-monad/lib/helpers';
import { circuitBreaker } from 'circuit-breaker-monad/lib';
import { BreakerEnvironment, BreakerOptions } from 'circuit-breaker-monad/lib/types';
import {
  capDelay,
  exponentialBackoff,
  limitRetries,
  monoidRetryPolicy,
  RetryStatus,
} from 'retry-ts'
import { retrying } from 'retry-ts/lib/Task'

export type RetryConfig = {
  maxTime: number,
  delay: number,
  limit: number,
};

export type BreakerConfig = BreakerOptions & {
  maxTime: number,
  delay: number
};

const configureRetryPolicy = ({ maxTime, delay, limit }: RetryConfig) => capDelay(
  maxTime,
  monoidRetryPolicy
    .concat(
      exponentialBackoff(delay),
      limitRetries(limit)
    )
)

type ShouldRetry<E,A> = {
  ref: BreakerEnvironment<A>,
  check: (a: Either<Error | E, A>) => boolean
}

const shouldRetry = <E,A>({
  ref,
  check
}: ShouldRetry<E,A>) => flow(
  (s: Either<E,A>) => {
    console.log('s',{s, ref})
    return s
  },
  (result) => ({
    result,
    isClosed: isBreakerStateClosed(ref)()
  }),
  ({isClosed, result}) => isClosed && check(result),
)

const isBreakerStateClosed = <A>(breakerEnvironment: BreakerEnvironment<A>) =>
  pipe(
    breakerEnvironment.breakerState.read,
    IO.map(s => s.tag === 'Closed')
  )

const logDelay = (status: RetryStatus) =>
  TE.rightIO(
    log(
      pipe(
        status.previousDelay,
        O.map(delay => `retrying in ${delay} milliseconds...`),
        O.getOrElse(() => 'first attempt...')
      )
    )
  )

export const circuitBreakerHttpClient = (
  breakerConfig: BreakerConfig,
) => {
  const breakerState = IOR.newIORef(breakerClosed(0))();
  const retryConfig = {
    maxTime: breakerConfig.maxTime,
    delay: breakerConfig.delay,
    limit: breakerConfig.maxBreakerFailures,
  };

  return <
    E extends Error,
    A,
    T extends Task<A> = Task<A>
  >(
    request: T,
    check: (a: Either<Error | E, A>) => boolean,
  ) =>  {
    const breakerService: State<BreakerEnvironment<A>, TaskEither<Error | E, A>> = (
      { request, breakerState }
    ) => {

      const fetcher = circuitBreaker<A>()(breakerConfig);
      const [result, ref] = fetcher({ request, breakerState })

      const retryPolicy = configureRetryPolicy(retryConfig);

      return [
        retrying(
          retryPolicy,
          (status) => pipe(
            logDelay(status),
            TE.apSecond(result)
          ),
          shouldRetry<E | Error,A>({
            check,
            ref
          })
        ),
        ref,
      ];
    };

    return breakerService({ breakerState, request });
  };
}
