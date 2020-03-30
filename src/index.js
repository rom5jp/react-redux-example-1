import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './Field'

const reducers = combineReducers(
  {
    field: () => ({value: 'Dumb component'})
  }
)

ReactDOM.render(
  // Provider is the main and unique source of truth, it controls all the app states
  // It can pass values to its components through the reducers
  <Provider store={createStore(reducers)}> 
    <Field initialValue='Initial Value' />
  </Provider>,
  
  document.getElementById('root')
)