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
              "案件辦理情形",
              "http://land-app2.chcg.gov.tw/query/casedo.jsp?menu=true&type=R"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q2.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "案件辦理期限",
              "http://www.xh-land.gov.tw/chaspx/service2.aspx?web=182"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q3.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "應附證件來源機關",
              "http://www.xh-land.gov.tw/chaspx/content.aspx?web=184"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q4.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "新舊地建號對應",
              "http://www.xh-land.gov.tw/chaspx/search05.aspx?web=185"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q5.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "地政規費收費標準",
              "http://www.xh-land.gov.tw/chaspx/menulist.aspx?web=186"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q6.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "公告土地現值",
              "http://www.land.chcg.gov.tw/qlandprice/landprice.asp?id=561"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q7.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "申報地價",
              "http://land.chcg.gov.tw/07other/main.asp?main_id=2"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q8.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "彰化縣門牌",
              "http://address.chcg.gov.tw/chcgCul/Culture/Default.aspx"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q9.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "WebPage", "都市土地使用分區", "http://luz.tcd.gov.tw/WEB/")}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q10.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "不動產交易資訊",
              "http://pri.land.moi.gov.tw/realestate_query/"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q11.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "WebPage", "地籍圖資便民系統", "http://easymap.land.moi.gov.tw/")}
          />
          <Btn
            ImageSource={require("../../image/btn/QueryArea/q12.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "WebPage", "地籍位置導引系統", "http://navimap.land.moi.gov.tw/")}
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
