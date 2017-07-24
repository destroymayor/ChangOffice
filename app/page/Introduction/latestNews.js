//最新消息
import React, { Component } from "react";
import { StyleSheet, Image, Platform, Linking, ScrollView, Text, View } from "react-native";

import Btn from "../../utils/Button";
import screen from "../../Style/screen";

export default class latestNews extends Component {
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
      <Image style={styles.container} source={require("../../image/backgrounds/introduction.png")}>
        <Btn
          ImageSource={require("../../image/btn/Introduction/i21.png")}
          ImageStyle={{ width: 180, height: 100 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "法規新訊",
            "http://www.xh-land.gov.tw/chaspx/news1.aspx?web=39"
          )}
        />
        <Btn
          ImageSource={require("../../image/btn/Introduction/i22.png")}
          ImageStyle={{ width: 180, height: 100 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "新聞快遞",
            "http://www.xh-land.gov.tw/chaspx/news1.aspx?web=37"
          )}
        />
        <Btn
          ImageSource={require("../../image/btn/Introduction/i23.png")}
          ImageStyle={{ width: 180, height: 100 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "便民訊息",
            "http://www.xh-land.gov.tw/chaspx/service.aspx?web=86"
          )}
        />
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
