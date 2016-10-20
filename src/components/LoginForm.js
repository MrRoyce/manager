/**
* @Author: royce
* @Date:   2016-10-17T18:04:38-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-19T11:30:30-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import React, { Component } from 'react';
import { Card, CardItem, Spinner, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  emailChanged,
  passwordChanged,
  loginUser } from '../logic/auth/auth.actions';

import { AppInput, AppButton } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    return (
      <AppButton onPress={this.onButtonPress.bind(this)}>
        Log in
      </AppButton>
    );
  }

  render() {
    return (
      <Card>
        <CardItem>
          <AppInput
            label="E-Mail"
            keyboardType="email-address"
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
        <Text style={styles.errorTextStyle}>
          {this.props.errorMsg}
        </Text>
        <CardItem>
          {this.renderButton()}
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
     emailChanged,
     passwordChanged,
     loginUser }, dispatch);
};

const mapStateToProps = ({ auth }) => {
  const { email, password, errorMsg, loading } = auth;
  return {
    email,
    password,
    errorMsg,
    loading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
