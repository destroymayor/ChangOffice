/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//本所轄區
import React, { Component } from "react";
import { StyleSheet, ScrollView, ListView, Image, Text, View } from "react-native";

import screen from "../../Style/screen";

export default class QurArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/introduction.png")}>
        <Image
          resizeMode={Image.resizeMode.contain}
          style={{ width: screen.width, height: screen.height, marginBottom: 50 }}
          source={require("../../image/mess.png")}
        />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screen.width,
    height: screen.height,
    justifyContent: "center"
  }
});
