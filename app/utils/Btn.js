import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity, Text } from "react-native";

export default class Btn extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.Buttons, this.props.styless]} onPress={this.props.onPress}>
        <Text style={[styles.text, this.props.textSize]}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Buttons: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 60,
    borderRadius: 10
  },
  text: {
    color: "#fff"
  }
});
