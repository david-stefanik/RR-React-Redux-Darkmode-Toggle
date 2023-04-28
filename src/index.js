import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{store}from'./store'
import{provider}from'react-redux'
ReactDOM.render(
  <React.StrictMode>
    <provider store={store}>
      <App /></provider>
  </React.StrictMode>,
  document.getElementById('root')
);