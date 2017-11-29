/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//實價登錄
import React, { Component } from "react";
import { StyleSheet, Image, Linking, Text, View } from "react-native";

import Btn from "../../utils/Button";
import screen from "../../Style/screen";

export default class PricingLogin extends Component {
  _NavigationBtn(page) {
    const { navigate } = this.props.navigation;
    navigate(page);
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/pricinglogin.png")}>
        <Btn
          ImageSource={require("../../image/btn/PricingLogin/pr1.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={() => {
            Linking.openURL(
              "http://www.xh-land.gov.tw/?Page=Files&Guid=60ec2e47-e7bc-27fb-913b-9a4da7c0712a"
            );
          }}
        />
        <Btn
          ImageSource={require("../../image/btn/PricingLogin/pr2.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={() => {
            Linking.openURL("https://clir.land.moi.gov.tw/cap/");
          }}
        />
        <Btn
          ImageSource={require("../../image/btn/PricingLogin/pr3.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={() => {
            Linking.openURL("http://lvr.land.moi.gov.tw/homePage.action");
          }}
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
