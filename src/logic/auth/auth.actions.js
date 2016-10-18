/**
* @Author: royce
* @Date:   2016-09-23T19:10:22-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-17T19:46:11-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
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

export const loginSuccess = () => {
  return {
    type: LOGIN_USER_SUCCESS
  };
};

export const loginFailed = () => {
  return {
    type: LOGIN_USER_FAILED
  };
};

export const actions = {
  emailChanged,
  passwordChanged,
  loginSuccess,
  loginFailed
};
