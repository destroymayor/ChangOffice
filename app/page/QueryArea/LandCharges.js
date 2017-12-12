/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//地政規費收費標準
import React, { Component } from "react";
import { StyleSheet, ScrollView, Image, Platform, TouchableOpacity, Linking, Text, View } from "react-native";

import Btn from "./utils/Button";
import screen from "../../Style/screen";

export default class LandCharges extends Component {
  _Navigation(page, imageNumber, PageName) {
    const { navigate } = this.props.navigation;
    navigate(page, { imageNumber: imageNumber, PageName: PageName });
  }

  _Button = (text, onPress) => (
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

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/queryarea.png")}>
        <ScrollView>
          <View style={styles.container}>
            <Btn text="登記費" onPress={this._Navigation.bind(this, "LandChargesPage", 1, "登記費")} />
            <Btn
              text="土地複丈費"
              onPress={this._Navigation.bind(this, "LandChargesPage", 2, "土地複丈費")}
            />
            <Btn
              text="建物測量費"
              onPress={this._Navigation.bind(this, "LandChargesPage", 3, "建物測量費")}
            />
            <Btn
              text="書狀工本費"
              onPress={this._Navigation.bind(this, "LandChargesPage", 4, "書狀工本費")}
            />
          </View>
        </ScrollView>
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
    height: screen.height
  }
});
