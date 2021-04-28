import React from 'react';
import './App.css';
import { Configure } from './Configure/Configure';
import { RepositoryList } from './RepositoryList/RepositoryList';
import { Divider } from 'antd';

function App() {
  return (
    <>
      <Configure />
      <Divider />
      <RepositoryList />
    </>
  );
}

export default App;
