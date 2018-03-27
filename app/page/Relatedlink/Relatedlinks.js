/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//相關連結
import React, { Component } from "react";
import { StyleSheet, ScrollView, Platform, Image, Linking, Text, View } from "react-native";

import Btns from "../../utils/Btn";
import screen from "../../Style/screen";

export default class Relatedlink extends Component {
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

  _NavigationBtnPage(page) {
    const { navigate } = this.props.navigation;
    navigate(page);
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/relatedlink.png")}>
        <ScrollView>
          <Btns
            text={"內政部地政司"}
            onPress={() => Linking.openURL("https://www.land.moi.gov.tw/pda/index.asp")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 20 }}
          />
          <Btns
            text={"彰化縣政府"}
            onPress={this._NavigationBtnPage.bind(this, "RelatedlinkGovernment")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 20 }}
          />
          <Btns
            text={"彰化縣各地政事務所"}
            onPress={this._NavigationBtnPage.bind(this, "RelatedlinkChanghua")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 20 }}
          />
          <Btns
            text={"轄區內公所"}
            onPress={this._NavigationBtnPage.bind(this, "RelatedlinkArea")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 20 }}
          />
          <Btns
            text={"轄區內戶政事務所"}
            onPress={this._NavigationBtnPage.bind(this, "RelatedlinkAreaInsiders")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 20 }}
          />
          <Btns
            text={"中區國稅局"}
            onPress={() => Linking.openURL("https://www.ntbca.gov.tw/etwmain/")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 20 }}
          />
          <Btns
            text={"彰化縣地方稅務局"}
            onPress={this._NavigationBtn.bind(this, "WebPage", "彰化縣地方稅務局", "https://www.changtax.gov.tw/Mobile/")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 20 }}
          />
          <Btns
            text={"房地合一專區"}
            onPress={() => Linking.openURL("https://www.ntbca.gov.tw/etwmain/front/ETW118W/CON/1936/8097788905194727543")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(68,121,143)", marginTop: 20 }}
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
    height: screen.height,
    justifyContent: "center"
  }
});
