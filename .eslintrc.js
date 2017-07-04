'use strict';

const OFF = 0;
const ERROR = 2;

module.exports = {
  "plugins": [
    "prettier"
  ],
  "extends": [
    "react-app",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  "rules": {
    "comma-dangle": [ERROR, 'always-multiline'],
    'quotes': [ERROR, 'single', {avoidEscape: true, allowTemplateLiterals: true }]
  }
};