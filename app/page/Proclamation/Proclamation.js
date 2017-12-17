/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//公告專區
import React, { Component } from "react";
import { Platform, ScrollView, StyleSheet, Linking, Image, Text, View } from "react-native";

import Btn from "../../utils/Button";
import screen from "../../Style/screen";

export default class Proclamation extends Component {
  _NavigationBtn(page) {
    const { navigate } = this.props.navigation;
    navigate(page);
  }

  _NavigationBtnWeb(page, PageName, PageUrl) {
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
      <Image style={styles.container} source={require("../../image/backgrounds/proclamation.png")}>
        <ScrollView>
          <Btn
            ImageSource={require("../../image/btn/Proclamation/p1.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtnWeb.bind(
              this,
              "WebPage",
              "書狀補給",
              "http://www.xh-land.gov.tw/?Page=Bulletin&Guid=7a699628-28d7-efd2-ab4e-8680132978f4"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/Proclamation/p2.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtnWeb.bind(
              this,
              "WebPage",
              "土地第一次登記",
              "http://www.xh-land.gov.tw/?Page=Bulletin&Guid=64b9f47d-d903-4ec6-840f-e5aeee63fc78"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/Proclamation/p3.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtnWeb.bind(
              this,
              "WebPage",
              "建物第一次登記",
              "http://www.xh-land.gov.tw/?Page=Bulletin&Guid=c7756f27-ed53-3054-04bf-542ad2e48e89"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/Proclamation/p4.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtnWeb.bind(
              this,
              "WebPage",
              "未辦繼承",
              "http://www.xh-land.gov.tw/?Page=Files&Guid=0662f34a-8a6b-ae8e-8a5f-7a72b1957ee2"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/Proclamation/p5.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtnWeb.bind(
              this,
              "WebPage",
              "地籍清理",
              "http://land.chcg.gov.tw/07other/other01_list.asp?topsn=3526&cate_id=3559"
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
    justifyContent: "center",
    width: screen.width,
    height: screen.height
  }
});
