/**
* @Author: Royce
* @Date:   2016-06-12T11:13:29-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-17T19:40:26-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/
import {
  createLogicMiddleware
} from 'redux-logic';
import firebase from 'firebase';
import {
  createStore,
  applyMiddleware
} from 'redux';

import logic from './rootLogic';
import reducers from './reducers';

const logicDeps = { // injected dependencies for logic
  firebase
};

const configureStore = () => {
  const middlewares = [createLogicMiddleware(logic, logicDeps)]; // Always have the thunk middleware

  // es6 spread operator to get the values in the array
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

  const storeWithMiddleware = createStoreWithMiddleware(reducers);

  return storeWithMiddleware;
};

export default configureStore;
