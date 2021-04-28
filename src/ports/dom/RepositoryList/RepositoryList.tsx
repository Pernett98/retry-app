import React from 'react'
import { useRepositoryData } from './useRepositoryData'
import { fold } from '@devexperts/remote-data-ts'

import { Repository } from '../../../domain/Repository'
import { Table, Skeleton, Alert, Button } from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Language',
    dataIndex: 'language',
    key: 'language',
  },
  {
    title: 'Starts',
    dataIndex: 'starts',
    key: 'starts',
  },
];

const renderRepositories = (repositories: Repository[]) => (
  <Table
    dataSource={repositories} 
    columns={columns} 
  />
)

const renderLoading = () => <Skeleton active />


const renderInitial = () => <></>

const renderError = (error: Error) => {
  console.log({error})
  return <Alert 
  type='error'
  message={error.message}
/>
}
  

const foldRepoData = fold<Error, Repository[], JSX.Element>(
  renderInitial,
  renderLoading,
  renderError,
  renderRepositories,
)


export const RepositoryList = () => {
  const {
    repositories,
    getRepos
  } = useRepositoryData()
  
  return (
    <div>
      <Button size='large' type='primary' onClick={getRepos}>Search</Button>
      {foldRepoData(repositories)}
    </div>
  )
}