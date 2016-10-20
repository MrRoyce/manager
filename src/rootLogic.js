/**
* @Author: royce
* @Date:   2016-09-23T19:58:04-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-18T22:19:41-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import { logic as authLogic } from './logic/auth/index';
import { logic as employeeLogic } from './logic/employee/index';

export default [
  ...authLogic,
  ...employeeLogic
];
