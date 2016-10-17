/**
* @Author: Royce
* @Date:   2016-06-12T11:13:29-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-17T19:19:53-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/
import {
  createLogicMiddleware
} from 'redux-logic';

import {
  createStore,
  applyMiddleware
} from 'redux';

import { config } from './config';
import logic from './rootLogic';
import reducers from './reducers';

const logicDeps = { // injected dependencies for logic
  httpClient: axios,
  GT_API_URL: `${config.gtAPIURL}`
};

const configureStore = () => {
  const middlewares = [thunkMiddleWare, createLogicMiddleware(logic, logicDeps)]; // Always have the thunk middleware

  if (process.env.NODE_ENV !== 'production') {
    // Add the logger
    middlewares.push(createLogger({ duration: true }));
  }

  // es6 spread operator to get the values in the array
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

  // The createStoreWithMiddleware gets an empty object {} as the second parameter
  // this is read from localStorage and to initialize the store
  const persistedState = loadState();

  const storeWithMiddleware = createStoreWithMiddleware(reducers, persistedState, (window.devToolsExtension && process.env.NODE_ENV !== 'production') ? window.devToolsExtension() : undefined);

  // add any subscribers to the store here
  // save the localStorage state - this has e.g. the users location
  storeWithMiddleware.subscribe(() => {
    saveState({
      localStorageData: storeWithMiddleware.getState().localStorageData
    });
  });

  return storeWithMiddleware;
};

export default configureStore;
