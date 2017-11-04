/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//下載專區
import React, { Component } from "react";
import { Platform, Linking, Image, StyleSheet, Text, View } from "react-native";

import Btn from "../../utils/Button";
import screen from "../../Style/screen";

export default class Dowunloads extends Component {
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
      <Image style={styles.container} source={require("../../image/backgrounds/downloads.png")}>
        <Btn
          ImageSource={require("../../image/btn/Downloads/d1.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "申請須知及書表",
            "http://www.xh-land.gov.tw/chaspx/download3.aspx?web=97"
          )}
        />
        <Btn
          ImageSource={require("../../image/btn/Downloads/d3.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "本所為民服務手冊",
            "http://www.xh-land.gov.tw/chaspx/download.aspx?web=89"
          )}
        />
        <Btn
          ImageSource={require("../../image/btn/Downloads/d4.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "本所轄區地段示意圖",
            "http://www.xh-land.gov.tw/?Guid=6a74b6fc-d8a8-d713-28a4-d87c1ddf68b8"
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
