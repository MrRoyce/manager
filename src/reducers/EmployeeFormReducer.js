/**
* @Author: royce
* @Date:   2016-10-18T22:30:12-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-19T18:59:09-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_FORM_RESET,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEE_EDIT_SUCCESS
 } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // use ES6 key interprelation
      return { ...state, [action.payload.prop]: action.payload.value };

    // Reset the form after create and edit
    case EMPLOYEE_FORM_RESET:
    case EMPLOYEE_CREATE_SUCCESS:
    case EMPLOYEE_EDIT_SUCCESS:
      return INITIAL_STATE;

    default:
     return state;

 }
};
