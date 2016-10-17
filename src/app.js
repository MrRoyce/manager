/**
* @Author: royce
* @Date:   2016-10-17T17:29:30-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-17T18:08:53-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBfNBAfgSygKGHhAggWtD85xqqQMrOjXHQ',
      authDomain: 'manager-c9f4d.firebaseapp.com',
      databaseURL: 'https://manager-c9f4d.firebaseio.com',
      storageBucket: 'manager-c9f4d.appspot.com',
      messagingSenderId: '909930870462'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
