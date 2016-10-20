/**
* @Author: royce
* @Date:   2016-09-23T19:10:22-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-18T13:03:27-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED

} from '../../actions/types';

export const actionTypes = {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
};

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return {
    type: LOGIN_USER_REQUEST,
    payload: { email, password }
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user
  };
};

export const loginFailed = (err) => {
  return {
    type: LOGIN_USER_FAILED,
    payload: err
  };
};

export const actions = {
  emailChanged,
  passwordChanged,
  loginSuccess,
  loginFailed
};
