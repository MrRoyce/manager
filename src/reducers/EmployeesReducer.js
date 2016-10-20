/**
* @Author: royce
* @Date:   2016-10-18T22:30:12-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-19T15:39:28-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import {
  EMPLOYEES_FETCH_SUCCESS
 } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.payload;

    default:
     return state;

  }
};
