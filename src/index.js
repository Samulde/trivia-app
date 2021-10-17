import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import combinedReducers from './reducers/combinedReducers';



const store = createStore(combinedReducers)
store.subscribe(() => console.log('The state of the store is: ', store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
