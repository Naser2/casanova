/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';

import { name as i } from './app.json';
import App from './app/index';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import promiseMiddleware from 'redux-promise';
import reducers from './app/v1/store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleWare = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);
const appRedux = () => {
  return (
    <Provider store={createStoreWithMiddleWare}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(i, () => appRedux);
