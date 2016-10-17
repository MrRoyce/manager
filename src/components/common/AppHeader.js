/**
* @Author: royce
* @Date:   2016-10-16T13:57:16-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-16T21:34:43-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

/* eslint-disable arrow-body-style */

import React from 'react';
import { Header, Title } from 'native-base';

const AppHeader = (props) => {
  const { headerStyle } = styles;
  return (
    <Header style={headerStyle}>
      <Title>{props.headerText}</Title>
    </Header>
  );
};

const styles = {
  headerStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    height: 60,
    elevation: 2,
    position: 'relative'
  }
};

export { AppHeader };
