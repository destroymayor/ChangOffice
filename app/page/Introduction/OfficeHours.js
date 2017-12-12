/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//辦公時間
import React, { Component } from "react";
import { StyleSheet, ScrollView, Image, Text, View } from "react-native";
import screen from "../../Style/screen";

export default class OfficeHours extends Component {
  render() {
    return (
      <ScrollView>
        <Image style={styles.container} source={require("../../image/backgrounds/introductionTime.png")} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screen.width,
    height: screen.height
  }
});
