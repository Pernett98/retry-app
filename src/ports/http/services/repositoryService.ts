import { failure, RemoteData, success } from '@devexperts/remote-data-ts'
import * as E from 'fp-ts/lib/Either'
import * as TE from 'fp-ts/lib/TaskEither'

import { pipe } from 'fp-ts/lib/function'



import { Repository } from "../../../domain/Repository";
import { BreakerConfig, circuitBreakerHttpClient } from "../client/circuitBreakerHttpClient"

const check = (a: E.Either<Error, Repository[]>) => E.isLeft(a);
const breakerOptions: BreakerConfig = {
  maxTime: 20000,
  delay: 400,
  maxBreakerFailures: 3,
  resetTimeoutSecs: 30,
  breakerDescription: 'Repository Client failed!'
}

const handleErrors = (response: Response) => !response.ok ? 
  Promise.reject(new Error(response.status.toString())) : 
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
  ([req, ref]) => req,
  TE.fold<Error, Repository[], RemoteData<Error, Repository[]>>(
      err => async () => {
        console.log(err)
        return failure(err)
      }, 
      repositories => async () => success(repositories)
    )
)

