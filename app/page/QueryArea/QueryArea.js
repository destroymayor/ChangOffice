/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//查詢專區
import React, { Component } from "react";
import { StyleSheet, ScrollView, Image, Platform, Linking, Text, View } from "react-native";

import Btn from "../../utils/Button";
import screen from "../../Style/screen";

export default class QueryArea extends Component {
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
      <Image style={styles.container} source={require("../../image/backgrounds/queryarea.png")}>
        <ScrollView>
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q1.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "案件辦理期限",
              "http://www.xh-land.gov.tw/?Guid=2b3e9cf9-7e96-7076-2a02-3f80147b0416"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q2.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._Navigation.bind(this, "CaseHandlingImagePage")}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q3.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "應附證件來源機關",
              "http://www.xh-land.gov.tw/?Guid=c571073c-d796-32b7-14fa-5e05ab2755b9"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q4.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "新舊地建號對應",
              "http://land-app2.chcg.gov.tw/query/oldnew.jsp?menu=true&type=R"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q5.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._Navigation.bind(this, "LandCharges")}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q6.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "公告土地現值",
              "http://land-app2.chcg.gov.tw/query/valueprice.jsp?menu=true"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q8.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "彰化縣門牌",
              "http://addressmt.tgos.nat.gov.tw/address/index.cfm?city_id=10007"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q9.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "都市土地使用分區",
              "http://luz.tcd.gov.tw/WEB/"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q10.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "不動產交易資訊",
              "https://pip.moi.gov.tw/WGB/web_page/WGB010100.aspx"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q11.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "地籍圖資便民系統",
              "http://easymap.land.moi.gov.tw/P02/Index"
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
