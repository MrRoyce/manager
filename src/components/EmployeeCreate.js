/**
* @Author: royce
* @Date:   2016-10-18T21:48:53-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-19T19:02:07-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import React, { Component } from 'react';
import { Card, CardItem } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import EmployeeForm from './EmployeeForm';

import {
  employeFormReset,
  employeeUpdate,
  employeeCreate } from '../logic/employee/employee.actions';
import { AppButton } from './common';

class EmployeeCreate extends Component {

  componentWillMount() {
    this.props.employeFormReset(); // make sure form is clear
  }

  componentWillUnmount() {
    this.props.employeFormReset(); // make sure form is clear
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardItem>
          <AppButton onPress={this.onButtonPress.bind(this)}>
            Add Employee
          </AppButton>
        </CardItem>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
     employeeUpdate, employeeCreate, employeFormReset }, dispatch);
};

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return {
    name, phone, shift
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);
