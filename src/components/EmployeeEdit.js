/**
* @Author: royce
* @Date:   2016-10-18T21:48:53-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-19T20:41:41-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import React, { Component } from 'react';
import { Card, CardItem } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _each from 'lodash/each';
import { text } from 'react-native-communications';

import EmployeeForm from './EmployeeForm';

import {
  employeeDelete,
  employeeEdit,
  employeeUpdate } from '../logic/employee/employee.actions';
import { AppButton, Confirm } from './common';

class EmployeeEdit extends Component {

  state = {
    showModal: false
  }

  componentWillMount() {
    // fill in the values in the reducer with the passed in employee values
    _each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onSavePress() {
    const { name, phone, shift } = this.props;
    this.props.employeeEdit({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    text(phone, `Your upcoming shift is on ${shift}`);
  }

  // Delete the employee
  onAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardItem>
          <AppButton onPress={this.onSavePress.bind(this)}>
            Save Changes
          </AppButton>
        </CardItem>
        <CardItem>
          <AppButton onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </AppButton>
        </CardItem>
        <CardItem>
          <AppButton onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </AppButton>
        </CardItem>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire the employee?
        </Confirm>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
     employeeUpdate, employeeEdit, employeeDelete }, dispatch);
};

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return {
    name, phone, shift
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit);
