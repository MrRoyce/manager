/**
* @Author: royce
* @Date:   2016-10-17T18:24:21-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-17T18:44:02-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
      
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;

  }
};
