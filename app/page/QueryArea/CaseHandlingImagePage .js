/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import screen from "../../Style/screen";
import Image from "react-native-transformable-image";

export default class CaseHandlingImagePage extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Image
          style={{ width: screen.widt - 10, height: screen.height - 10 }}
          source={require("./Image/q1.png")}
          pixels={{ width: screen.width, height: screen.height }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
