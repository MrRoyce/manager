<!--
@Author: royce
@Date:   2016-06-12T11:55:36-04:00
@Email:  rharding@gotonight.com
@Project: Go Tonight
@Last modified by:   royce
@Last modified time: 2016-10-20T10:54:54-04:00
@License: © 2016 GoTonight LLC All Rights Reserved
-->

# Go Tonight

This is the client source code for the GoTonight website.

###Getting Started###

```
 > "deploy": "gh-pages -d build",
 > "stats": "webpack --profile --json > stats.json",
 > "build": "webpack",
 > "start": "webpack-dev-server",
 > "test": "mocha --compilers js:babel-core/register --require ignore-styles ./test/test_helper.js --recursive ./test",
 > "test:watch": "npm run test -- --watch"

 To run tests via mocha from a program - since running from the command line with npm is too slow:
 babel-node mocha-runner.js
 (have to add to .bashrc so it can find babel-node- export PATH="./node_modules/.bin:$PATH"  # add node modules  )

 Continuous integration via GitHub/Jenkins/Selinium/Cucumber

 1  npm install
    export PATH="./node_modules/.bin:$PATH"
    babel-node mocha-jenkins.js

 2 NODE_ENV=production cucumber.js
```
