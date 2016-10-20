/**
* @Author: royce
* @Date:   2016-10-18T12:50:16-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-19T14:22:35-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List } from 'native-base';
import _map from 'lodash/map';

import EmployeeItem from './EmployeeItem';
import {
  employeesFetch } from '../logic/employee/employee.actions';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeesFetch();
  }

  renderRow(employee) {
    return <EmployeeItem employee={employee} />;
  }

  render() {
    return (
      <List
        dataArray={this.props.employees}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
     employeesFetch }, dispatch);
};

const mapStateToProps = (state) => {
  const employees = _map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
