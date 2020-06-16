import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

import './index.css';
import 'antd/dist/antd.css';

import App from './App';

import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers';
import rootSaga from './store/sagas';

import { baseURL } from './configs/baseURL';
import socketConfig from './configs/socket';

axios.defaults.baseURL = baseURL;
const saga = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));
saga.run(rootSaga);
socketConfig(store.dispatch);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
