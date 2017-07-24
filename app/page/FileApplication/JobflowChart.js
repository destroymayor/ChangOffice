/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//作業流程圖
import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import screen from "../../Style/screen";

export default class JobflowChart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: screen.width, height: screen.height }}
              source={require("../../image/flowchart.png")}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
