/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//試算專區
import React, { Component } from "react";
import { Platform, Linking, Image, StyleSheet, Text, View } from "react-native";

import Btn from "../../utils/Button";
import screen from "../../Style/screen";

export default class TrialCalculation extends Component {
  _NavigationBtn(page, PageName, PageUrl) {
    const { navigate } = this.props.navigation;
    if (Platform.OS === "android") {
      navigate(page, {
        PageName: PageName,
        PageUrl: PageUrl
      });
    } else {
      Linking.openURL(PageUrl);
    }
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/trialcalculation.png")}>
        <Btn
          ImageSource={require("../../image/btn/TrialCalculation/t1.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={() => {
            Linking.openURL("https://www.etax.nat.gov.tw/etwmain/front/ETW158W9");
          }}
        />
        <Btn
          ImageSource={require("../../image/btn/TrialCalculation/t2.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "契稅",
            "https://www.etax.nat.gov.tw/etwmain/web/ETW158W11"
          )}
        />
        <Btn
          ImageSource={require("../../image/btn/TrialCalculation/t3.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "贈與稅",
            "https://www.etax.nat.gov.tw/etwmain/front/ETW158W7"
          )}
        />
        <Btn
          ImageSource={require("../../image/btn/TrialCalculation/t4.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "遺產稅",
            "https://www.etax.nat.gov.tw/etwmain/front/ETW158W6"
          )}
        />
        <Btn
          ImageSource={require("../../image/btn/TrialCalculation/t5.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(this, "WebPage", "貸款", "http://rate.bot.com.tw/trial/t05")}
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
