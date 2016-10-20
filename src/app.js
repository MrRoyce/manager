/**
* @Author: royce
* @Date:   2016-10-17T17:29:30-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-18T12:39:02-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import { createStore } from 'redux';
import firebase from 'firebase';

//import reducers from './reducers';
import Router from './Router';
import { config } from './config';

import configureStore from './configureStore';

const storeWithMiddleware = configureStore();

class App extends Component {

  componentWillMount() {
    try {
      firebase.app();  // see if it exists
    } catch (variable) {
      firebase.initializeApp(config.firebase);
    }
  }

  render() {
    return (
      <Provider store={storeWithMiddleware}>
        <Router />
      </Provider>
    );
  }
}

export default App;
