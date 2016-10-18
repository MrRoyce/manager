/**
* @Author: royce
* @Date:   2016-09-23T19:20:40-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-17T20:06:42-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import { createLogic }  from 'redux-logic';

import {
  LOGIN_USER_REQUEST
} from '../../actions/types';

import {
  emailChanged,
  passwordChanged,
  loginSuccess,
  loginFailed
} from './auth.actions';

/*eslint-disable no-unused-vars*/
// use axios injected as firebase from configureStore logic deps
// we also have access to getState and action in the first argument
// but they were not needed for this particular code

async function loginUser(firebase, payload) {

  //  Increment the logic count
  const auth =
    await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(resp => resp);
  return ({});
}

export const loginUserLogic = createLogic({
  type           : LOGIN_USER_REQUEST,
  latest         : true, // take latest only
  processOptions : {
    dispatchReturn : true,
    successType    : loginSuccess,
    failType       : loginFailed
  },

  // firebase injected
  // from configureStore logic deps
  process({ firebase, action }) {
    const
      payload = {
        email : action.payload.email,
        password  : action.payload.password
      }
    ;

    return loginUser(firebase, GT_API_URL, payload);
  }
});

/*eslint-enable no-unused-vars*/
export default [
  loginUserLogic
];
