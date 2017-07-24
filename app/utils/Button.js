import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity, Text } from "react-native";

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.Buttons, this.props.styless]} onPress={this.props.onPress}>
        <Image
          style={this.props.ImageStyle}
          resizeMode={Image.resizeMode.contain}
          source={this.props.ImageSource}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Buttons: {
    alignItems: "center",
    justifyContent: "center"
  }
});
