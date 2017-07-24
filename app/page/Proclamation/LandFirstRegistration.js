/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//土地第一次登記
import React, { Component } from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import screen from "../../Style/screen";

export default class LandFirstRegistration extends Component {
  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/onlineapplication.png")}>
        <Text style={{ color: "#fff", fontSize: 20 }}>暫無資料</Text>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: screen.width,
    height: screen.height,
    backgroundColor: "transparent"
  }
});
