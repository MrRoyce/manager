/**
* @Author: royce
* @Date:   2016-10-17T17:49:27-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-19T12:56:10-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeesReducer from './EmployeesReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeesReducer
});

export default rootReducer;
