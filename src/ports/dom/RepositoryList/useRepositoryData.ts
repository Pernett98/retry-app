import { useCallback, useState } from "react"
import { initial, pending, RemoteData } from '@devexperts/remote-data-ts'

import { Repository } from "../../../domain/Repository"

import { getRepositories } from '../../http/services/repositoryService'

export const useRepositoryData = () => {
  const [repositories, setRepositories] = useState<RemoteData<Error, Repository[]>>(initial)
  const getRepos = useCallback(
  () => {
    setRepositories(pending)
    getRepositories()()
      .then(setRepositories)
  },
    [],
  )

  return {
    repositories,
    getRepos
  }
}