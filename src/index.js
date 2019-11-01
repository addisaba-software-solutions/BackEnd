import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import message from './components/chatManagement/chat'
import reducer from './components/store/userReducer'
import App from './App';
import './index.css';

import Store from './components/store/store.js'

let storeInstance = Store()

ReactDOM.render(
  <Provider store={storeInstance}>
  <App />
</Provider>,
  document.getElementById('root')

);
