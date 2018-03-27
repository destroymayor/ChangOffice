/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//本所簡介
import React, { Component } from "react";
import { StyleSheet, Platform, Image, Linking, ScrollView, TouchableOpacity, Text, View } from "react-native";

import Btns from "../../utils/Btn";
import screen from "../../Style/screen";

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
      <Image style={styles.container} source={require("../../image/backgrounds/introduction.png")}>
        <ScrollView>
          <Btns
            text={"本所資訊"}
            onPress={this._NavigationBtn.bind(this, "QurArea")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(139,33,22)", marginTop: 20 }}
          />
          <Btns
            text={"最新消息"}
            onPress={this._NavigationBtnWeb.bind(
              this,
              "WebPage",
              "最新消息",
              "http://www.xh-land.gov.tw/?Page=Bulletin&SortKey=1&Guid=a24ee7fc-6d31-4f3a-bfdb-9ae15d117630"
            )}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(139,33,22)", marginTop: 20 }}
          />
          <Btns
            text={"聯絡我們"}
            onPress={this._NavigationBtnWeb.bind(
              this,
              "WebPage",
              "聯絡我們",
              "http://www.xh-land.gov.tw/?Page=MailBox&Guid=5a11e4df-6c77-1e95-b239-f5affdb85088"
            )}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(139,33,22)", marginTop: 20 }}
          />
          <Btns
            text={"位置交通"}
            onPress={this._NavigationBtn.bind(this, "LocationTraffic")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(139,33,22)", marginTop: 20 }}
          />
          <Btns
            text={"辦公時間"}
            onPress={this._NavigationBtn.bind(this, "OfficeHours")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(139,33,22)", marginTop: 20 }}
          />
          <Btns
            text={"各課業務"}
            onPress={this._NavigationBtn.bind(this, "EachClassBusiness")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(139,33,22)", marginTop: 20 }}
          />
          <Btns
            text={"樓層介紹"}
            onPress={this._NavigationBtn.bind(this, "FloorPresentation")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(139,33,22)", marginTop: 20 }}
          />
          <Btns
            text={"FaceBook粉絲專頁"}
            onPress={this._NavigationBtnWeb.bind(this, "WebPage", "Facebook粉絲專頁", "https://www.facebook.com/xihuland/")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(139,33,22)", marginTop: 20 }}
          />
          <Btns
            text={"YouTube影音頻道"}
            onPress={this._NavigationBtnWeb.bind(
              this,
              "WebPage",
              "YouTube影音頻道",
              "https://www.youtube.com/channel/UC6JBfN88gZdqrSqUEnh8VMg"
            )}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(139,33,22)", marginTop: 20 }}
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
