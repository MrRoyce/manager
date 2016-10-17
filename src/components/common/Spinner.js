/**
* @Author: royce
* @Date:   2016-10-16T22:34:37-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-16T22:48:35-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'native-base';

/* eslint-disable arrow-body-style */

const Spinner = ({ size }) => {
  const { spinnerStyle } = styles;
  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
