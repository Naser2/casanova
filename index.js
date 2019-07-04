

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from './app/store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(reducers, composeEnhancers(
    applyMiddleware(promiseMiddleware)
))

const appRedux = () => (
    <Provider store={createStoreWithMiddleware}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => appRedux);
// /**
//  * @format
//  */
// import React from 'react';
// import { YellowBox } from 'react-native';
// import { AppRegistry } from 'react-native';

// import { name as i } from './app.json';
// import App from './app/index';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';

// import reducers from './app/store/reducers';
// import rootReducer from './app/store/reducers';
// import thunk from 'redux-thunk';
// import promiseMiddleware from 'redux-promise';

// const composeEnhancers =
// window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

// const middleware= [thunk]

// // const store = createStore(
// //   rootReducer,
// //   composeEnhancers(applyMiddleware(...middleware))
// // );
// // const intialState= {User: {
// //   name: "hello "
// // }}

// // const store = createStore(
// //   rootReducer,
// //   // intialState,
// //   compose(applyMiddleware(...middleware),
// //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// //   )
// // );


// // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const createStoreWithMiddleware = createStore(reducers, composeEnhancers(
//     applyMiddleware(promiseMiddleware)
// ))

// const appRedux = () => {
  
//   YellowBox.ignoreWarnings(['Remote debugger']);
//   console.ignoredYellowBox = ['APP REDUX Remote debugger'];


//   return (
//     <Provider store={createStoreWithMiddleware}>
//       <App />
//     </Provider>
//   );
// };

// AppRegistry.registerComponent(i, () => appRedux);
