/**
* @Author: royce
* @Date:   2016-10-18T22:12:23-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-19T20:23:57-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_FORM_RESET,
  EMPLOYEE_CREATE_REQUEST,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEE_CREATE_FAILED,
  EMPLOYEE_DELETE_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_DELETE_FAILED,
  EMPLOYEE_EDIT_REQUEST,
  EMPLOYEE_EDIT_SUCCESS,
  EMPLOYEE_EDIT_FAILED,
  EMPLOYEES_FETCH_REQUEST,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEES_FETCH_FAILED
} from '../../actions/types';

export const actionTypes = {
  EMPLOYEE_UPDATE
};

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeFormReset = () => {
  return {
    type: EMPLOYEE_FORM_RESET
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  return {
    type: EMPLOYEE_CREATE_REQUEST,
    payload: { name, phone, shift }
  };
};

export const employeeCreateSuccess = () => {
  return {
    type: EMPLOYEE_CREATE_SUCCESS
  };
};

export const employeeCreateFailed = (err) => {
  return {
    type: EMPLOYEE_CREATE_FAILED,
    payload: err
  };
};

export const employeeDelete = ({ uid }) => {
  return {
    type: EMPLOYEE_DELETE_REQUEST,
    payload: { uid }
  };
};

export const employeeDeleteSuccess = () => {
  return {
    type: EMPLOYEE_DELETE_SUCCESS
  };
};

export const employeeDeleteFailed = (err) => {
  return {
    type: EMPLOYEE_DELETE_FAILED,
    payload: err
  };
};

export const employeeEdit = ({ name, phone, shift, uid }) => {
  return {
    type: EMPLOYEE_EDIT_REQUEST,
    payload: { name, phone, shift, uid }
  };
};

export const employeeEditSuccess = () => {
  return {
    type: EMPLOYEE_EDIT_SUCCESS
  };
};

export const employeeEditFailed = (err) => {
  return {
    type: EMPLOYEE_EDIT_FAILED,
    payload: err
  };
};


export const employeesFetch = () => {
  return {
    type: EMPLOYEES_FETCH_REQUEST
  };
};

export const employeesFetchSuccess = (users) => {
  return {
    type: EMPLOYEES_FETCH_SUCCESS,
    payload: users
  };
};

export const employeesFetchFailed = (err) => {
  return {
    type: EMPLOYEES_FETCH_FAILED,
    payload: err
  };
};

export const actions = {
  employeeUpdate,
  employeeCreate,
  employeeCreateSuccess,
  employeeCreateFailed,
  employeeDelete,
  employeeDeleteSuccess,
  employeeDeleteFailed,
  employeeEdit,
  employeeEditSuccess,
  employeeEditFailed,
  employeesFetch,
  employeesFetchSuccess,
  employeesFetchFailed
};
