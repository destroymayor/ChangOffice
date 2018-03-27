/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//試算專區
import React, { Component } from "react";
import { Platform, Linking, Image, StyleSheet, ScrollView, TouchableOpacity, Text, View } from "react-native";

import Btns from "../../utils/Btn";
import screen from "../../Style/screen";

export default class TrialCalculation extends Component {
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
        backgroundColor: "rgb(157,52,37)",
        borderRadius: 5,
        marginTop: 35
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 18, color: "#fff" }}>{text}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/trialcalculation.png")}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              width: screen.width,
              height: screen.height
            }}
          >
            <Btns
              text={"土地增值稅"}
              onPress={this._NavigationBtn.bind(this, "WebPage", "土地增值稅", "https://www.etax.nat.gov.tw/etwmain/front/ETW158W9")}
              textSize={{ fontSize: 24 }}
              styless={{ backgroundColor: "rgb(155,53,41)", marginTop: 20 }}
            />
            <Btns
              text={"契稅"}
              onPress={this._NavigationBtn.bind(this, "WebPage", "契稅", "https://www.etax.nat.gov.tw/etwmain/web/ETW158W11")}
              textSize={{ fontSize: 24 }}
              styless={{ backgroundColor: "rgb(155,53,41)", marginTop: 20 }}
            />
            <Btns
              text={"贈與稅"}
              onPress={this._NavigationBtn.bind(this, "WebPage", "贈與稅", "https://www.etax.nat.gov.tw/etwmain/front/ETW158W7")}
              textSize={{ fontSize: 24 }}
              styless={{ backgroundColor: "rgb(155,53,41)", marginTop: 20 }}
            />
            <Btns
              text={"遺產稅"}
              onPress={this._NavigationBtn.bind(this, "WebPage", "遺產稅", "https://www.etax.nat.gov.tw/etwmain/front/ETW158W6")}
              textSize={{ fontSize: 24 }}
              styless={{ backgroundColor: "rgb(155,53,41)", marginTop: 20 }}
            />
            <Btns
              text={"貸款"}
              onPress={this._NavigationBtn.bind(this, "WebPage", "貸款", "http://rate.bot.com.tw/trial/t05")}
              textSize={{ fontSize: 24 }}
              styless={{ backgroundColor: "rgb(155,53,41)", marginTop: 20 }}
            />
            <Btns
              text={"面積換算"}
              onPress={this._NavigationBtn.bind(this, "WebPage", "面積換算", "http://163.29.218.196/query/areachange.jsp?menu=true&type=P")}
              textSize={{ fontSize: 24 }}
              styless={{ backgroundColor: "rgb(155,53,41)", marginTop: 20 }}
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
    width: screen.width,
    height: screen.height,
    justifyContent: "center"
  }
});
