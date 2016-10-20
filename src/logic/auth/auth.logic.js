/**
* @Author: royce
* @Date:   2016-09-23T19:20:40-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-19T11:45:53-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import { Actions } from 'react-native-router-flux';

import { createLogic } from 'redux-logic';

import {
  LOGIN_USER_REQUEST
} from '../../actions/types';

import {
  loginSuccess,
  loginFailed
} from './auth.actions';

/*eslint-disable no-unused-vars*/
// use axios injected as firebase from configureStore logic deps
// we also have access to getState and action in the first argument
// but they were not needed for this particular code

async function loginUser(firebase, payload) {
  //  Login the user
  const user =

    await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then((resp) => {
        Actions.main(); //Route to the list of employees
        return resp;
      })
    ;

  return ({ user });
}

export const loginUserLogic = createLogic({
  type: LOGIN_USER_REQUEST,
  latest: true, // take latest only
  processOptions: {
    dispatchReturn: true,
    successType: loginSuccess,
    failType: loginFailed
  },

  // firebase injected
  // from configureStore logic deps
  process({ firebase, action }) {
    const
      payload = {
        email: action.payload.email,
        password: action.payload.password
      }
    ;

    return loginUser(firebase, payload);
  }
});

/*eslint-enable no-unused-vars*/
export default [
  loginUserLogic
];
