/**
* @Author: royce
* @Date:   2016-10-18T21:48:53-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-19T17:40:45-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import React, { Component } from 'react';
import { View } from 'react-native';
import { CardItem, Picker, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  employeeUpdate } from '../logic/employee/employee.actions';
import { AppInput } from './common';

const Item = Picker.Item;

class EmployeeForm extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <View>
        <CardItem>
          <AppInput
            label="Name:"
            placeholder="employee name"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardItem>
        <CardItem>
        <AppInput
          label="Phone:"
          keyboardType="phone-pad"
          placeholder="555-555-5555"
          value={this.props.phone}
          onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
        />
        </CardItem>
        <CardItem style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle} >Shift:</Text>
          <Picker
            iosHeader="Select one"
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Item label="Monday" value="Monday" />
            <Item label="Tuesday" value="Tuesday" />
            <Item label="Wednesday" value="Wednesday" />
            <Item label="Thursday" value="Thursday" />
            <Item label="Friday" value="Friday" />
            <Item label="Saturday" value="Saturday" />
            <Item label="Sunday" value="Sunday" />
         </Picker>
        </CardItem>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
     employeeUpdate }, dispatch);
};

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return {
    name, phone, shift
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
