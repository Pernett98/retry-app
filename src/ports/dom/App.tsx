import React from 'react';
import './App.css';
import { Configure } from './Configure/Configure';
import { RepositoryList } from './RepositoryList/RepositoryList';

function App() {
  return (
    <>
      <Configure />
      <RepositoryList />
    </>
  );
}

export default App;
