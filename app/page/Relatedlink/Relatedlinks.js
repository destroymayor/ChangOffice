/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//相關連結
import React, { Component } from "react";
import { StyleSheet, Linking, Text, View } from "react-native";

import Btn from "../../utils/Button";

export default class Relatedlink extends Component {
  _NavigationBtn(page, PageName, PageUrl) {
    const { navigate } = this.props.navigation;
    navigate(page, {
      PageName: PageName,
      PageUrl: PageUrl
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Btn
          styless={styles.button}
          ButtonsName="內政部地政司"
          onPress={() =>
            Linking.openURL("https://www.land.moi.gov.tw/chhtml/index.asp")}
        />
        <Btn
          styless={styles.button}
          ButtonsName="彰化縣政府"
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "彰化縣政府",
            "http://www.chcg.gov.tw/ch/00home/home.asp"
          )}
        />
        <Btn
          styless={styles.button}
          ButtonsName="彰化縣各地政事務所"
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "彰化縣各地政事務所",
            "http://land.chcg.gov.tw/07other/main.asp?main_id=7817"
          )}
        />
        <Btn
          styless={styles.button}
          ButtonsName="轄區內公所"
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "轄區內公所",
            "http://town.chcg.gov.tw/xihu/00home/index7.asp"
          )}
        />
        <Btn
          styless={styles.button}
          ButtonsName="轄區內戶政事務所"
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "轄區內戶政事務所",
            "http://www.xh-land.gov.tw/chaspx/default.aspx"
          )}
        />
        <Btn
          styless={styles.button}
          ButtonsName="中區國稅局"
          onPress={() => Linking.openURL("https://www.ntbca.gov.tw/etwmain/")}
        />
        <Btn
          styless={styles.button}
          ButtonsName="彰化縣地方稅務局"
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "彰化縣地方稅務局",
            "http://www.changtax.gov.tw/"
          )}
        />
        <Btn
          styless={styles.button}
          ButtonsName="房地合一專區"
          onPress={() =>
            Linking.openURL(
              "https://www.ntbca.gov.tw/etwmain/front/ETW118W/CON/1936/8097788905194727543"
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
    width: 200,
    height: 45,
    margin: 5
  }
});
