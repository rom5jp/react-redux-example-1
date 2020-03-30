import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './Field'
import fieldReducer from './fieldReducer'

// reducers are objects of functions
const reducers = combineReducers(
  {
    field: fieldReducer // the 'field' property is controlled by the fieldReducer, which returns the function responsible to handle the changed value
  }
)

ReactDOM.render(
  // Provider is the main and unique source of truth, it controls all the app states
  // It can pass values to its components through the reducers
  <Provider store={createStore(reducers)}>
    <Field />
  </Provider>,
  
  document.getElementById('root')
)