/**
* @Author: royce
* @Date:   2016-10-16T17:17:10-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-16T22:15:08-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

/* eslint-disable arrow-body-style */

import React from 'react';
import { Button } from 'native-base';

const AppButton = ({ onPress, children }) => {
  return (
    <Button bordered block onPress={onPress}>
        {children}
    </Button>
  );
};

export { AppButton };
