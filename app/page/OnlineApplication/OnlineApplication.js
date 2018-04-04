/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//線上申辦
import React, { Component } from "react";
import { Platform, ScrollView, StyleSheet, Image, Linking, TouchableOpacity, Text, View } from "react-native";

import Btns from "../../utils/Btn";
import screen from "../../Style/screen";

export default class OnlineApplication extends Component {
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

  _Button = (text, onPress) => (
    <TouchableOpacity
      style={{
        width: 180,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(18,95,118)",
        borderRadius: 5,
        marginTop: 25,
        marginBottom: 10
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16, color: "#fff" }}>{text}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/onlineapplication.png")}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Btns
              text={"全國地政電子謄本系統"}
              onPress={() => {
                Linking.openURL("http://210.71.181.102/");
              }}
              textSize={{ fontSize: 22 }}
              styless={{ backgroundColor: "rgb(18,95,118)", marginTop: 20 }}
            />
            <Btns
              text={`彰化縣地政電傳資訊`}
              onPress={() => Linking.openURL("http://pgo-chcgetw.land.nat.gov.tw/HE90_CHHG/chhg_2/plug_in/begin.cfm")}
              textSize={{ fontSize: 22 }}
              styless={{ backgroundColor: "rgb(18,95,118)", marginTop: 20 }}
            />
            <Btns
              text={`地政司地政線上申辦系統`}
              onPress={() => Linking.openURL("https://clir.land.moi.gov.tw/cap/?websn=474")}
              textSize={{ fontSize: 22 }}
              styless={{ backgroundColor: "rgb(18,95,118)", marginTop: 20 }}
            />
            <Btns
              text={`測繪圖資整合資料查詢申購`}
              onPress={() => Linking.openURL("http://whgis.nlsc.gov.tw/Default.aspx")}
              textSize={{ fontSize: 22 }}
              styless={{ backgroundColor: "rgb(18,95,118)", marginTop: 20 }}
            />
            <Btns
              text={`Hinet地政服務`}
              onPress={() => Linking.openURL(this, "WebPage", "Hinet地政服務", "http://land.hinet.net/index.asp")}
              textSize={{ fontSize: 22 }}
              styless={{ backgroundColor: "rgb(18,95,118)", marginTop: 20 }}
            />
            <Btns
              text={`下班延時預約`}
              onPress={this._NavigationBtn.bind(
                this,
                "WebPage",
                "下班延時預約",
                "https://docs.google.com/forms/d/1IPE-FzmLOWuV3KuyyP6ldn3GsllaoAe6SRWfbwfqQV0/edit"
              )}
              textSize={{ fontSize: 22 }}
              styless={{ backgroundColor: "rgb(18,95,118)", marginTop: 20 }}
            />
            <Btns
              text={`假日預約`}
              onPress={this._NavigationBtn.bind(
                this,
                "WebPage",
                "假日預約",
                "https://docs.google.com/forms/d/1cy-2UdiYiCzjy9e1e7m6c-tWWuEcGkOkwsuHlCn6KqU/edit"
              )}
              textSize={{ fontSize: 22 }}
              styless={{ backgroundColor: "rgb(18,95,118)", marginTop: 20 }}
            />
            <Btns
              text={`EATM線上繳費`}
              onPress={() => Linking.openURL("https://sap.bot.com.tw/sap/sap1030s?MID=S00125")}
              textSize={{ fontSize: 22 }}
              styless={{ backgroundColor: "rgb(18,95,118)", marginTop: 20 }}
            />
            <Btns
              text={`檔案線上申請`}
              onPress={() => Linking.openURL("http://www.xh-land.gov.tw/?Page=ModifyFormBody&Guid=ddea0a59-bdfa-82c6-79f4-8a1168c64c44")}
              textSize={{ fontSize: 22 }}
              styless={{ backgroundColor: "rgb(18,95,118)", marginTop: 20 }}
            />
          </View>
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
