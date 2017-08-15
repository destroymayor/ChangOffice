/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//作業流程圖
import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import screen from "../../Style/screen";
import Image from "react-native-transformable-image";

export default class JobflowChart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: screen.width, height: screen.height }}
          source={require("../../image/flowchart.png")}
          pixels={{ width: screen.width, height: screen.height }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
