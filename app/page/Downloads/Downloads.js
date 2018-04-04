/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//下載專區
import React, { Component } from "react";
import { Platform, Linking, Image, StyleSheet, Text, View } from "react-native";

import Btns from "../../utils/Btn";
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

  _Navigation(page) {
    const { navigate } = this.props.navigation;
    navigate(page);
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/downloads.png")}>
        <Btns
          text={"申請須知及書表"}
          onPress={this._Navigation.bind(this, "ApplicationNote")}
          textSize={{ fontSize: 24 }}
          styless={{ backgroundColor: "rgb(26,114,156)", marginTop: 20 }}
        />
        <Btns
          text={"為民服務手冊"}
          onPress={this._Navigation.bind(this, "ServiceManual")}
          textSize={{ fontSize: 24 }}
          styless={{ backgroundColor: "rgb(26,114,156)", marginTop: 20 }}
        />
        <Btns
          text={"轄區地段示意圖"}
          onPress={() => Linking.openURL("http://www.xh-land.gov.tw/?Guid=6a74b6fc-d8a8-d713-28a4-d87c1ddf68b8")}
          textSize={{ fontSize: 24 }}
          styless={{ backgroundColor: "rgb(26,114,156)", marginTop: 20 }}
        />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screen.width,
    height: screen.height
  }
});
