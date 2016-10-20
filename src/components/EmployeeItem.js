/**
* @Author: royce
* @Date:   2016-10-17T10:30:34-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-19T18:04:29-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import { ListItem, Text, View } from 'native-base';
import { Actions } from 'react-native-router-flux';

class EmployeeItem extends Component {

  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;

    return (
      <View>
        <ListItem button onPress={this.onRowPress.bind(this)}>
          <Text style={styles.titleStyle}>
            {name}
          </Text>
        </ListItem>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default EmployeeItem;
