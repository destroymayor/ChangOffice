//最新消息
import React, { Component } from "react";
import { StyleSheet, Platform, Linking, ScrollView, Text, View } from "react-native";

import Btn from "../../utils/Button";

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
      <View style={styles.container}>
        <Btn
          styless={styles.button}
          ButtonsName={`法規新訊`}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "法規新訊",
            "http://www.xh-land.gov.tw/chaspx/news1.aspx?web=39"
          )}
        />
        <Btn
          styless={styles.button}
          ButtonsName={`新聞快遞`}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "新聞快遞",
            "http://www.xh-land.gov.tw/chaspx/news1.aspx?web=37"
          )}
        />
        <Btn
          styless={styles.button}
          ButtonsName={`便民訊息`}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "便民訊息",
            "http://www.xh-land.gov.tw/chaspx/service.aspx?web=86"
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  button: {
    margin: 10,
    width: 130,
    height: 60
  }
});
