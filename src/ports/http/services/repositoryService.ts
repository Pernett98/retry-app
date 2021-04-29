import { failure, RemoteData, success } from '@devexperts/remote-data-ts'
import * as E from 'fp-ts/lib/Either'
import * as TE from 'fp-ts/lib/TaskEither'
import * as T from 'fp-ts/lib/Task'
import { pipe } from 'fp-ts/lib/function'
import { Repository } from "../../../domain/Repository";
import { BreakerConfig, circuitBreakerHttpClient } from "../client/circuitBreakerHttpClient"

const check = (a: E.Either<Error, Repository[]>) => E.isLeft(a);
const breakerOptions: BreakerConfig = {
  maxTime: 20000,
  delay: 400,
  maxBreakerFailures: 3,
  resetTimeoutSecs: 10,
  breakerDescription: 'The service is Unavailable'
}

const handleErrors = (response: Response) => !response.ok ? 
  Promise.reject(new Error(
    `server failed with status: ${response.status.toString()}`
  )) : 
  response

  
const client = circuitBreakerHttpClient(breakerOptions)

export const configureFailure = (failures: number) => 
  fetch(`/config?failures=${failures}`)

const fetchRepositories = () => fetch('/repositories')
  .then(handleErrors)
  .then(res => res.json())

export const getRepositories = () => pipe(
  client(
    fetchRepositories,
    check
  ),
  ([req]) => req,
  TE.fold<Error, Repository[], RemoteData<Error, Repository[]>>(
      err => T.of(failure(err)), 
      repositories => T.of(success(repositories))
    )
)

