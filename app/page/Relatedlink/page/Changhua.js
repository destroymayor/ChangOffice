/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//彰化縣各地戶政事務所
import React, { Component } from "react";
import { Platform, Linking, Image, StyleSheet, ScrollView, Text, View } from "react-native";

import Btns from "../../../utils/Btn";
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
          <Btns
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 30 }}
            text={"彰化地政"}
            textSize={{ fontSize: 24 }}
            onPress={this._NavigationBtn.bind(this, "WebPage", "彰化地政", "https://www.ch-land.gov.tw/")}
          />
          <Btns
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 30 }}
            text={"員林地政"}
            textSize={{ fontSize: 24 }}
            onPress={this._NavigationBtn.bind(this, "WebPage", "員林地政", "http://www.yl-land.gov.tw/PDA/default.aspx?websn=35")}
          />
          <Btns
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 30 }}
            text={"北斗地政"}
            textSize={{ fontSize: 24 }}
            onPress={this._NavigationBtn.bind(this, "WebPage", "北斗地政", "http://www.bd-land.gov.tw/mobile/default.aspx")}
          />
          <Btns
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 30 }}
            text={"鹿港地政"}
            textSize={{ fontSize: 24 }}
            onPress={this._NavigationBtn.bind(this, "WebPage", "鹿港地政", "http://www.lukang-land.gov.tw/PDA/default.aspx?websn=21")}
          />
          <Btns
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 30 }}
            text={"和美地政"}
            textSize={{ fontSize: 24 }}
            onPress={this._NavigationBtn.bind(this, "WebPage", "和美地政", "http://www.homei-land.gov.tw/chaspx/default.aspx")}
          />
          <Btns
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 30 }}
            text={"田中地政"}
            textSize={{ fontSize: 24 }}
            onPress={this._NavigationBtn.bind(this, "WebPage", "田中地政", "http://www.tj-land.gov.tw/default.asp")}
          />
          <Btns
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 30, marginBottom: 20 }}
            text={"二林地政"}
            textSize={{ fontSize: 24 }}
            onPress={this._NavigationBtn.bind(this, "WebPage", "二林地政", "http://www.er-land.gov.tw/chaspx/Default.aspx")}
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
    height: screen.height
  }
});
