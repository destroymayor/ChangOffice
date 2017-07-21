/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//查詢專區
import React, { Component } from "react";
import { StyleSheet, ScrollView, Platform, Linking, Text, View } from "react-native";

import Btn from "../../utils/Button";

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
      <ScrollView>
        <View style={styles.container}>
          <Btn
            styless={styles.button}
            ButtonsName="案件辦理情形"
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "案件辦理情形",
              "http://land-app2.chcg.gov.tw/query/casedo.jsp?menu=true&type=R"
            )}
          />
          <Btn
            styless={styles.button}
            ButtonsName="案件辦理期限"
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "案件辦理期限",
              "http://www.xh-land.gov.tw/chaspx/service2.aspx?web=182"
            )}
          />
          <Btn
            styless={styles.button}
            ButtonsName={`應附證件來源機關`}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "應附證件來源機關",
              "http://www.xh-land.gov.tw/chaspx/content.aspx?web=184"
            )}
          />
          <Btn
            styless={styles.button}
            ButtonsName="新舊地建號對應"
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "新舊地建號對應",
              "http://www.xh-land.gov.tw/chaspx/search05.aspx?web=185"
            )}
          />
          <Btn
            styless={styles.button}
            ButtonsName={`地政規費收費標準`}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "地政規費收費標準",
              "http://www.xh-land.gov.tw/chaspx/menulist.aspx?web=186"
            )}
          />
          <Btn
            styless={styles.button}
            ButtonsName="公告土地現值"
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "公告土地現值",
              "http://www.land.chcg.gov.tw/qlandprice/landprice.asp?id=561"
            )}
          />
          <Btn
            styless={styles.button}
            ButtonsName="申報地價"
            onPress={this._NavigationBtn.bind(this, "WebPage", "申報地價", "url")}
          />
          <Btn
            styless={styles.button}
            ButtonsName="彰化縣門牌"
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "彰化縣門牌",
              "http://address.chcg.gov.tw/chcgCul/Culture/Default.aspx"
            )}
          />
          <Btn
            styless={styles.button}
            ButtonsName={`都市土地使用分區`}
            onPress={this._NavigationBtn.bind(this, "WebPage", "都市土地使用分區", "http://luz.tcd.gov.tw/WEB/")}
          />
          <Btn
            styless={styles.button}
            ButtonsName="不動產交易資訊"
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "不動產交易資訊",
              "http://pri.land.moi.gov.tw/realestate_query/"
            )}
          />
          <Btn
            styless={styles.button}
            ButtonsName={`地籍圖資便民系統`}
            onPress={this._NavigationBtn.bind(this, "WebPage", "地籍圖資便民系統", "http://easymap.land.moi.gov.tw/")}
          />
          <Btn
            styless={styles.button}
            ButtonsName={`地籍位置導引系統`}
            onPress={this._NavigationBtn.bind(this, "WebPage", "地籍位置導引系統", "http://navimap.land.moi.gov.tw/")}
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
    marginTop: 10
  },
  button: {
    alignSelf: "center",
    width: 200,
    height: 75,
    margin: 5
  }
});
