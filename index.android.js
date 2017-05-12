/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Steup from './app/Steup'
import codePush from 'react-native-code-push'
let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
};

export default class ChanghuaLandsOffice extends Component {
  componentDidMount() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }
  render() {
    return (<Steup onNavigationStateChange={ null } />);
  }
}

// ChanghuaLandsOffice = codePush(codePushOptions)(ChanghuaLandsOffice);
// ChanghuaLandsOffice = codePush(ChanghuaLandsOffice);

AppRegistry.registerComponent('ChanghuaLandsOffice', () => ChanghuaLandsOffice);