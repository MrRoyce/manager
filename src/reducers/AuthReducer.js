/**
* @Author: royce
* @Date:   2016-10-17T18:24:21-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-18T22:31:01-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
 } from '../actions/types';

const INITIAL_STATE = {
  email: 'test@test.com',
  password: '123456',
  errorMsg: '',
  user: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER_REQUEST:
      return { ...state, loading: true, errorMsg: '' };

    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload.user };

    case LOGIN_USER_FAILED:
      return { ...state, loading: false, password: '', errorMsg: action.payload.message };

    default:
      return state;

  }
};
