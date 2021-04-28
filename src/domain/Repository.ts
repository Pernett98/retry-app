export type Repository  ={
  name: string
  starts: number
  language: string
}

export type RepositoryResponse = {
  name: string
  stargazers_count: number
  language: string
}