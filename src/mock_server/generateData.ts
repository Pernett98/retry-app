import { RepositoryResponse } from '../domain/Repository'
import { 
  Gen, 
  generateSample, 
  recordOf,
  string,
  int,
  mkSeed,
} from '@no-day/fp-ts-generators'

const genRepositories: Gen<RepositoryResponse> = recordOf({
  name: string(),
  'stargazers_count': int({ min: 0, max: 100 }),
  language: string()
})

const sampleGenerator = generateSample({
  count: 30,
  seed: mkSeed(1998),
  size: 25
})

export const generateRepositories = () => sampleGenerator(genRepositories)