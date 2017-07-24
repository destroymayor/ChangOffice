/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//公告專區
import React, { Component } from "react";
import { ScrollView, StyleSheet, Image, Text, View } from "react-native";

import Btn from "../../utils/Button";
import screen from "../../Style/screen";

export default class Proclamation extends Component {
  _NavigationBtn(page) {
    const { navigate } = this.props.navigation;
    navigate(page);
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/proclamation.png")}>
        <ScrollView>
          <Btn
            ImageSource={require("../../image/btn/Proclamation/p1.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "BooklikeSupply")}
          />
          <Btn
            ImageSource={require("../../image/btn/Proclamation/p2.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "LandFirstRegistration")}
          />
          <Btn
            ImageSource={require("../../image/btn/Proclamation/p3.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "ConstructionFirstRegistration")}
          />
          <Btn
            ImageSource={require("../../image/btn/Proclamation/p4.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "NotInherited")}
          />
          <Btn
            ImageSource={require("../../image/btn/Proclamation/p5.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "CadastralCleaning")}
          />
        </ScrollView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: screen.width,
    height: screen.height
  }
});
