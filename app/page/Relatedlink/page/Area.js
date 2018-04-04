/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//轄區內公所
import React, { Component } from "react";
import { Platform, Linking, Image, StyleSheet, Text, View } from "react-native";

import Btn from "../../../utils/Button";
import Btns from "../../../utils/Btn";
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
        <Btns
          styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 30 }}
          text={"溪湖鎮公所"}
          textSize={{ fontSize: 24 }}
          onPress={this._NavigationBtn.bind(this, "WebPage", "溪湖鎮公所", "http://town.chcg.gov.tw/xihu/00home/index7.asp")}
        />
        <Btns
          styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 30 }}
          text={"埔心鄉公所"}
          textSize={{ fontSize: 24 }}
          onPress={this._NavigationBtn.bind(this, "WebPage", "埔心鄉公所", "http://town.chcg.gov.tw/puxin/00home/index7.asp")}
        />
        <Btns
          styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 30 }}
          text={"埔鹽鄉公所"}
          textSize={{ fontSize: 24 }}
          onPress={this._NavigationBtn.bind(this, "WebPage", "埔鹽鄉公所", "http://www.puyan.gov.tw/index.aspx")}
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
