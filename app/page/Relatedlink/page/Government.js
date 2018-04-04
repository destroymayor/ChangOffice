/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//彰化縣政府
import React, { Component } from "react";
import { Platform, Linking, Image, StyleSheet, Text, View } from "react-native";

import Btn from "../../../utils/Button";
import Btns from "../../../utils/Btn";
import screen from "../../../Style/screen";

export default class Government extends Component {
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
        <Btns
          styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 40 }}
          text={"彰化縣政府"}
          textSize={{ fontSize: 24 }}
          onPress={this._NavigationBtn.bind(this, "WebPage", "彰化縣政府", "http://www.chcg.gov.tw/ch/00home/home.asp")}
        />
        <Btns
          styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 40 }}
          text={"彰化縣政府地政處"}
          textSize={{ fontSize: 24 }}
          onPress={this._NavigationBtn.bind(this, "WebPage", "彰化縣政府地政處", "http://land.chcg.gov.tw/00home/index6.asp")}
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
