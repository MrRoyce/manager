/**
* @Author: royce
* @Date:   2016-10-17T18:04:38-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-17T18:48:12-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import React, { Component } from 'react';
import { Card, CardItem } from 'native-base';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged } from '../actions';
import { AppInput, AppButton } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardItem>
          <AppInput
            label="E-Mail"
            placeholder="user@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardItem>
        <CardItem>
          <AppInput
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardItem>
        <CardItem>
          <AppButton>
            Log in
          </AppButton>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
