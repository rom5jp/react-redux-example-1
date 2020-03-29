import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import Provider from 'react-redux'

ReactDOM.render(
  <Provider >
    <App />
  </Provider>
  ,document.getElementById('root')
);