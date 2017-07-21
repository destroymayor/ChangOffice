/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";

import Steup from "./app/Steup";
import codePush from "react-native-code-push";

export default class ChanghuaLandsOffice extends Component {
  // componentDidMount() {
  //   codePush.sync({
  //     updateDialog: false,
  //     installMode: codePush.InstallMode.IMMEDIATE
  //   });
  // }
  render() {
    return <Steup onNavigationStateChange={null} />;
  }
}

AppRegistry.registerComponent("ChanghuaLandsOffice", () => ChanghuaLandsOffice);
