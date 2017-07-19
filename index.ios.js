/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './src/Login';

/* var Login = require('./Login');

var displayLogin = React.createClass({
    render: function(){
      return(
            <Login/>
      );
    }
});

export default class LesPitonneuxCommunity extends Component {
  render() {
    return (
          <Login/>
    );
  }
}
 
AppRegistry.registerComponent('LesPitonneuxCommunity', () => LesPitonneuxCommunity); */

AppRegistry.registerComponent('LesPitonneuxCommunity', () => Login);
