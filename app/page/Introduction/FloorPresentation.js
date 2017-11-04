/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//樓層介紹
import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import screen from "../../Style/screen";

export default class FloorPresentation extends Component {
  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/introduction.png")}>
        <ScrollView>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 10
            }}
          >
            1.一樓平面圖
          </Text>
          <Image
            resizeMode={Image.resizeMode.contain}
            style={{
              width: screen.width,
              height: screen.height / 2,
              marginBottom: 20
            }}
            source={require("../../image/floorpresen1.png")}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 10
            }}
          >
            2.二樓平面圖
          </Text>
          <Image
            resizeMode={Image.resizeMode.contain}
            style={{
              width: screen.width,
              height: screen.height / 2,
              marginBottom: 20
            }}
            source={require("../../image/floorpresen2.png")}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 10
            }}
          >
            3.三樓平面圖
          </Text>
          <Image
            resizeMode={Image.resizeMode.contain}
            style={{
              width: screen.width,
              height: screen.height / 2,
              marginBottom: 20
            }}
            source={require("../../image/floorpresen3.png")}
          />
        </ScrollView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screen.width,
    height: screen.height,
    backgroundColor: "transparent"
  }
});
