/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//轄區內戶政事務所
import React, { Component } from "react";
import { Platform, Linking, Image, StyleSheet, Text, View } from "react-native";

import Btn from "../../../utils/Button";
import screen from "../../../Style/screen";

export default class AreaInsiders extends Component {
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
          ImageSource={require("../../../image/btn/Relatedlink/btn/AreaInsider/a1.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "溪湖鎮戶政",
            "http://house.chcg.gov.tw/xihu/00home/index1.asp"
          )}
        />
        <Btn
          ImageSource={require("../../../image/btn/Relatedlink/btn/AreaInsider/a2.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "埔心鄉戶政",
            "http://house.chcg.gov.tw/pusin/00home/index1.asp"
          )}
        />
        <Btn
          ImageSource={require("../../../image/btn/Relatedlink/btn/AreaInsider/a3.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "埔鹽鄉戶政",
            "http://house.chcg.gov.tw/puyan/00home/index1.asp"
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
