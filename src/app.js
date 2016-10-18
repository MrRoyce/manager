/**
* @Author: royce
* @Date:   2016-10-17T17:29:30-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-17T20:27:04-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import { config } from './config';
import LoginForm from './components/LoginForm';

import configureStore from './configureStore';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(config.firebase);
  }

  render() {
    return (
      <Provider store={configureStore}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
