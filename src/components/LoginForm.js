/**
* @Author: royce
* @Date:   2016-10-17T18:04:38-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-17T20:53:58-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import React, { Component } from 'react';
import { Card, CardItem, Spinner } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firebase from 'firebase';

import {
  emailChanged,
  passwordChanged,
  loginSuccess,
  loginFailed } from '../logic/auth/auth.actions';

import { AppInput, AppButton } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginSuccess() {
    this.props.loginSuccess();
  }

  onLoginFail() {
    this.props.loginFailed();
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.setState({
      error: '',
      loading: true
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
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
          {this.renderButton()}
        </CardItem>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
     emailChanged,
     passwordChanged,
     loginSuccess,
     loginFailed }, dispatch);
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
