/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//本所簡介
import React, { Component } from "react";
import { StyleSheet, Platform, Linking, ScrollView, Text, View } from "react-native";

import Btn from "../../utils/Button";

export default class Introduction extends Component {
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
      <ScrollView>
        <View style={styles.container}>
          <Btn
            styless={styles.button}
            ButtonsName="本所資訊"
            onPress={this._NavigationBtn.bind(this, "QurArea")}
          />
          <Btn
            styless={styles.button}
            ButtonsName="最新訊息"
            onPress={this._NavigationBtn.bind(this, "latestNews")}
          />
          <Btn
            styless={styles.button}
            ButtonsName="聯絡我們"
            onPress={this._NavigationBtnWeb.bind(
              this,
              "WebPage",
              "聯絡我們",
              "http://www.xh-land.gov.tw/chaspx/guestbook.aspx?web=104"
            )}
          />
          <Btn
            styless={styles.button}
            ButtonsName="位置交通"
            onPress={this._NavigationBtn.bind(this, "LocationTraffic")}
          />
          <Btn
            styless={styles.button}
            ButtonsName="辦公時間"
            onPress={this._NavigationBtn.bind(this, "OfficeHours")}
          />
          <Btn
            styless={styles.button}
            ButtonsName="各課業務"
            onPress={this._NavigationBtn.bind(this, "EachClassBusiness")}
          />
          <Btn
            styless={styles.button}
            ButtonsName="樓層介紹"
            onPress={this._NavigationBtn.bind(this, "FloorPresentation")}
          />
          <Btn
            styless={styles.button}
            ButtonsName={`     FB粉絲專頁${"\n"}Youtube影音頻道`}
            onPress={this._NavigationBtnWeb.bind(
              this,
              "WebPage",
              "FB粉絲專頁",
              "https://www.facebook.com/pages/%E6%BA%AA%E6%B9%96%E6%88%B6%E6%94%BF%E4%BA%8B%E5%8B%99%E6%89%80/266668466720997?fref=ts"
            )}
          />
        </View>
      </ScrollView>
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
