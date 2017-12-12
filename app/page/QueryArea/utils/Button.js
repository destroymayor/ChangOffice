/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//查詢專區
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class Button extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity
        style={{
          width: 150,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(60,79,94)",
          borderRadius: 5,
          marginBottom: 30
        }}
        onPress={onPress}
      >
        <Text style={{ fontSize: 18, color: "#fff" }}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
