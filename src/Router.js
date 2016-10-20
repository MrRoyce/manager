/**
* @Author: royce
* @Date:   2016-10-18T12:33:47-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-19T17:55:53-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, Platform } from 'react-native';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  /* eslint-disable no-confusing-arrow */
  const ionicon = (icon) => (Platform.OS === 'ios') ? `ios-${icon}` : `md-${icon}`;

  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          initial
        />
      </Scene>
      <Scene key="main">
        <Scene
          renderRightButton={() => {
            return (<TouchableOpacity onPress={() => Actions.employeeCreate()}>
                <Icon name={ionicon('add')} size={26} color='#000' />
            </TouchableOpacity>);
          }}
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          initial
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
        />
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Employee"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
