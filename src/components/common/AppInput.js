/**
* @Author: royce
* @Date:   2016-10-16T13:57:16-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-16T22:12:20-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

/* eslint-disable arrow-body-style */

import React from 'react';
import { View, TextInput, Text } from 'react-native';
//import {  } from 'native-base';

const AppInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const {
    inputStyle, labelStyle, containerStyle
  } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { AppInput };
