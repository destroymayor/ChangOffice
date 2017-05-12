/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Steup from './app/Steup'

export default class ChanghuaLandsOffice extends Component {
  render() {
    return (<Steup onNavigationStateChange={ null } />);
  }
}

AppRegistry.registerComponent('ChanghuaLandsOffice', () => ChanghuaLandsOffice);
