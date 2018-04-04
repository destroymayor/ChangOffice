/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//查詢專區
import React, { Component } from "react";
import { StyleSheet, ScrollView, Image, Platform, Linking, Text, View } from "react-native";

import Btns from "../../utils/Btn";
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
          <Btns
            text={"案件辦理情形"}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "案件辦理情形",
              "http://land-app2.chcg.gov.tw/query/casedo.jsp?menu=true&type=R"
            )}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(60,79,94)", marginTop: 20 }}
          />
          <Btns
            text={"案件辦理期限"}
            onPress={this._Navigation.bind(this, "CaseHandlingImagePage")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(60,79,94)", marginTop: 20 }}
          />
          <Btns
            text={"應附證件來源機關"}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "應附證件來源機關",
              "http://www.xh-land.gov.tw/?Guid=c571073c-d796-32b7-14fa-5e05ab2755b9"
            )}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(60,79,94)", marginTop: 20 }}
          />
          <Btns
            text={"新舊地建號對應"}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "新舊地建號對應",
              "http://land-app2.chcg.gov.tw/query/oldnew.jsp?menu=true&type=R"
            )}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(60,79,94)", marginTop: 20 }}
          />
          <Btns
            text={"地政規費收費標準"}
            onPress={this._Navigation.bind(this, "LandCharges")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(60,79,94)", marginTop: 20 }}
          />
          <Btns
            text={"公告土地現值"}
            onPress={() => {
              Linking.openURL("http://land-app2.chcg.gov.tw/query/valueprice.jsp?menu=true");
            }}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(60,79,94)", marginTop: 20 }}
          />
          <Btns
            text={"彰化縣門牌"}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "彰化縣門牌",
              "http://addressmt.tgos.nat.gov.tw/address/index.cfm?city_id=10007"
            )}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(60,79,94)", marginTop: 20 }}
          />
          <Btns
            text={"都市土地使用分區"}
            onPress={this._NavigationBtn.bind(this, "WebPage", "都市土地使用分區", "http://luz.tcd.gov.tw/WEB/")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(60,79,94)", marginTop: 20 }}
          />
          <Btns
            text={"不動產交易資訊"}
            onPress={this._NavigationBtn.bind(this, "WebPage", "不動產交易資訊", "https://pip.moi.gov.tw/WGB/web_page/WGB010100.aspx")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(60,79,94)", marginTop: 20 }}
          />
          <Btns
            text={"地籍圖資便民系統"}
            onPress={this._NavigationBtn.bind(this, "WebPage", "地籍圖資便民系統", "http://easymap.land.moi.gov.tw/P02/Index")}
            textSize={{ fontSize: 24 }}
            styless={{ backgroundColor: "rgb(60,79,94)", marginTop: 20 }}
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
