/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//相關連結
import React, { Component } from "react";
import { StyleSheet, ScrollView, Platform, Image, Linking, Text, View } from "react-native";

import Btn from "../../utils/Button";
import screen from "../../Style/screen";

export default class Relatedlink extends Component {
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
      <Image style={styles.container} source={require("../../image/backgrounds/relatedlink.png")}>
        <ScrollView>
          <Btn
            ImageSource={require("../../image/btn/Relatedlink/r1.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={() => Linking.openURL("https://www.land.moi.gov.tw/chhtml/index.asp")}
          />
          <Btn
            ImageSource={require("../../image/btn/Relatedlink/r2.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "彰化縣政府",
              "http://www.chcg.gov.tw/ch/00home/home.asp"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/Relatedlink/r3.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "彰化縣各地政事務所",
              "http://land.chcg.gov.tw/07other/main.asp?main_id=7817"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/Relatedlink/r4.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "轄區內公所",
              "http://town.chcg.gov.tw/xihu/00home/index7.asp"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/Relatedlink/r5.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "轄區內戶政事務所",
              "http://www.xh-land.gov.tw/chaspx/default.aspx"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/Relatedlink/r6.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={() => Linking.openURL("https://www.ntbca.gov.tw/etwmain/")}
          />
          <Btn
            ImageSource={require("../../image/btn/Relatedlink/r7.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={this._NavigationBtn.bind(this, "WebPage", "彰化縣地方稅務局", "http://www.changtax.gov.tw/")}
          />
          <Btn
            ImageSource={require("../../image/btn/Relatedlink/r8.png")}
            ImageStyle={{ width: 180, height: 90 }}
            onPress={() =>
              Linking.openURL("https://www.ntbca.gov.tw/etwmain/front/ETW118W/CON/1936/8097788905194727543")}
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
