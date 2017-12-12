/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//轄區內公所
import React, { Component } from "react";
import { Platform, Linking, Image, StyleSheet, Text, View } from "react-native";

import Btn from "../../../utils/Button";
import screen from "../../../Style/screen";

export default class Area extends Component {
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
        <Btn
          ImageSource={require("../../../image/btn/Relatedlink/btn/Area/a1.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "溪湖鎮戶政",
            "http://town.chcg.gov.tw/xihu/00home/index7.asp"
          )}
        />
        <Btn
          ImageSource={require("../../../image/btn/Relatedlink/btn/Area/a2.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "埔心鄉戶政",
            "http://town.chcg.gov.tw/puxin/00home/index7.asp"
          )}
        />
        <Btn
          ImageSource={require("../../../image/btn/Relatedlink/btn/Area/a3.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "埔鹽鄉戶政",
            "http://www.puyan.gov.tw/index.aspx"
          )}
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
