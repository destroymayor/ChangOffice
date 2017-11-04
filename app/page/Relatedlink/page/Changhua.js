/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//彰化縣各地戶政事務所
import React, { Component } from "react";
import { Platform, Linking, Image, StyleSheet, ScrollView, Text, View } from "react-native";

import Btn from "../../../utils/Button";
import screen from "../../../Style/screen";

export default class Changhua extends Component {
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
      <Image style={styles.container} source={require("../../../image/backgrounds/relatedlink.png")}>
        <ScrollView>
          <Btn
            ImageSource={require("../../../image/btn/Relatedlink/btn/Changhua/c1.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={this._NavigationBtn.bind(this, "WebPage", "彰化地政", "https://www.ch-land.gov.tw/")}
          />
          <Btn
            ImageSource={require("../../../image/btn/Relatedlink/btn/Changhua/c2.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "員林地政",
              "http://www.yl-land.gov.tw/PDA/default.aspx?websn=35"
            )}
          />
          <Btn
            ImageSource={require("../../../image/btn/Relatedlink/btn/Changhua/c3.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "北斗地政",
              "http://www.bd-land.gov.tw/mobile/default.aspx"
            )}
          />
          <Btn
            ImageSource={require("../../../image/btn/Relatedlink/btn/Changhua/c4.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "鹿港地政",
              "http://www.lukang-land.gov.tw/PDA/default.aspx?websn=21"
            )}
          />
          <Btn
            ImageSource={require("../../../image/btn/Relatedlink/btn/Changhua/c5.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "和美地政",
              "http://www.homei-land.gov.tw/chaspx/default.aspx"
            )}
          />
          <Btn
            ImageSource={require("../../../image/btn/Relatedlink/btn/Changhua/c6.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "田中地政",
              "http://www.tj-land.gov.tw/default.asp"
            )}
          />
          <Btn
            ImageSource={require("../../../image/btn/Relatedlink/btn/Changhua/c7.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "二林地政",
              "http://www.er-land.gov.tw/chaspx/Default.aspx"
            )}
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
    justifyContent: "center"
  }
});
