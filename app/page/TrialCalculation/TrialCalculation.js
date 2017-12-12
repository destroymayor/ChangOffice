/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//試算專區
import React, { Component } from "react";
import { Platform, Linking, Image, StyleSheet, ScrollView, TouchableOpacity, Text, View } from "react-native";

import Btn from "../../utils/Button";
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
              justifyContent: "center",
              alignItems: "center",
              width: screen.width,
              height: screen.height
            }}
          >
            <Btn
              ImageSource={require("../../image/btn/TrialCalculation/t1.png")}
              ImageStyle={{ width: 180, height: 90 }}
              onPress={() => {
                Linking.openURL("https://www.etax.nat.gov.tw/etwmain/front/ETW158W9");
              }}
            />
            <Btn
              ImageSource={require("../../image/btn/TrialCalculation/t2.png")}
              ImageStyle={{ width: 180, height: 90 }}
              onPress={this._NavigationBtn.bind(
                this,
                "WebPage",
                "契稅",
                "https://www.etax.nat.gov.tw/etwmain/web/ETW158W11"
              )}
            />
            <Btn
              ImageSource={require("../../image/btn/TrialCalculation/t3.png")}
              ImageStyle={{ width: 180, height: 90 }}
              onPress={this._NavigationBtn.bind(
                this,
                "WebPage",
                "贈與稅",
                "https://www.etax.nat.gov.tw/etwmain/front/ETW158W7"
              )}
            />
            <Btn
              ImageSource={require("../../image/btn/TrialCalculation/t4.png")}
              ImageStyle={{ width: 180, height: 90 }}
              onPress={this._NavigationBtn.bind(
                this,
                "WebPage",
                "遺產稅",
                "https://www.etax.nat.gov.tw/etwmain/front/ETW158W6"
              )}
            />

            {this._Button(
              "貸款",
              this._NavigationBtn.bind(this, "WebPage", "貸款", "http://rate.bot.com.tw/trial/t05")
            )}
            {this._Button(
              "面積換算",
              this._NavigationBtn.bind(
                this,
                "WebPage",
                "面積換算",
                "http://163.29.218.196/query/areachange.jsp?menu=true&type=P"
              )
            )}
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
