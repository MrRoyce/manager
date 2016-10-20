/**
* @Author: royce
* @Date:   2016-10-18T22:12:31-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-19T20:31:22-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import { Actions } from 'react-native-router-flux';

import { createLogic } from 'redux-logic';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE_REQUEST,
  EMPLOYEES_FETCH_REQUEST,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_EDIT_REQUEST,
  EMPLOYEE_DELETE_REQUEST
} from '../../actions/types';

import {
  employeeEditSuccess,
  employeeEditFailed,
  employeeDeleteSuccess,
  employeeDeleteFailed,
  employeeCreateSuccess,
  employeeCreateFailed
} from './employee.actions';

export const employeeUpdateLogic = createLogic({
  type: EMPLOYEE_UPDATE,

  // getState auto injected
  process({ getState }, dispatch) {
    dispatch(); // Nothing to do, just indicate done
  }
});

async function createEmployee(firebase, payload) {
  // Get current authenticated user
  const { currentUser } = firebase.auth();

  //  Create the Employee
  const bogus = await firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({
      name: payload.name,
      phone: payload.phone,
      shift: payload.shift
    })
    .then((resp) => {
      Actions.employeeList({ type: 'reset' }); //Route to the list of employees
      return resp;
    })
  ;

  return ({ bogus });  // Need this to force dispatch to reducer??
}

export const employeeCreateLogic = createLogic({
  type: EMPLOYEE_CREATE_REQUEST,
  latest: true, // take latest only
  processOptions: {
    dispatchReturn: true,
    successType: employeeCreateSuccess,
    failType: employeeCreateFailed
  },

  // firebase injected
  // from configureStore logic deps
  process({ firebase, action }) {
    const
      payload = {
        name: action.payload.name,
        phone: action.payload.phone,
        shift: action.payload.shift
      }
    ;

    return createEmployee(firebase, payload);
  }
});

async function editEmployee(firebase, payload) {
  // Get current authenticated user
  const { currentUser } = firebase.auth();

  //  Edit the existing Employee
  const bogus = await firebase.database().ref(`/users/${currentUser.uid}/employees/${payload.uid}`)
    .set({
      name: payload.name,
      phone: payload.phone,
      shift: payload.shift
    })
    .then((resp) => {
      Actions.employeeList({ type: 'reset' }); //Route to the list of employees
      return resp;
    })
  ;

  return ({ bogus });  // Need this to force the dispatch to the reducer??
}

export const employeeEditLogic = createLogic({
  type: EMPLOYEE_EDIT_REQUEST,
  latest: true, // take latest only
  processOptions: {
    dispatchReturn: true,
    successType: employeeEditSuccess,
    failType: employeeEditFailed
  },

  // firebase injected
  // from configureStore logic deps
  process({ firebase, action }) {
    const
      payload = {
        name: action.payload.name,
        phone: action.payload.phone,
        shift: action.payload.shift,
        uid: action.payload.uid
      }
    ;

    return editEmployee(firebase, payload);
  }
});

async function deleteEmployee(firebase, payload) {
  // Get current authenticated user
  const { currentUser } = firebase.auth();

  //  Delete the specified employee
  const bogus = await firebase.database().ref(`/users/${currentUser.uid}/employees/${payload.uid}`)
    .remove()
    .then((resp) => {
      Actions.employeeList({ type: 'reset' }); //Route to the list of employees
      return resp;
    })
  ;

  return ({ bogus });  // Need this to force the dispatch to the reducer??
}

export const employeeDeleteLogic = createLogic({
  type: EMPLOYEE_DELETE_REQUEST,
  latest: true, // take latest only
  processOptions: {
    dispatchReturn: true,
    successType: employeeDeleteSuccess,
    failType: employeeDeleteFailed
  },

  // firebase injected
  // from configureStore logic deps
  process({ firebase, action }) {
    const
      payload = {
        uid: action.payload.uid
      }
    ;

    return deleteEmployee(firebase, payload);
  }
});

export const employeesFetchLogic = createLogic({
  type: EMPLOYEES_FETCH_REQUEST,
  latest: false, // take latest only

  // firebase injected
  // from configureStore logic deps
  process({ firebase }, dispatch) {
    const { currentUser } = firebase.auth();

    //  Get all the employees from firebase
    //  Subscribe to the FB db change event
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch(
          { type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() },
          { allowMore: true } // Allow multiple dispatch
        );
      })
    ;
  }
});

/*eslint-enable no-unused-vars*/
export default [
  employeeUpdateLogic,
  employeeEditLogic,
  employeeDeleteLogic,
  employeeCreateLogic,
  employeesFetchLogic
];
