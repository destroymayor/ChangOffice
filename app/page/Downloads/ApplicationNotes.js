/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//下載專區
import React, { Component } from "react";
import { Platform, Linking, Image, StyleSheet, ScrollView, TouchableOpacity, Text, View } from "react-native";

import screen from "../../Style/screen";

export default class ApplicationNote extends Component {
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
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(60,79,94)",
        borderRadius: 5,
        marginBottom: 30
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 18, color: "#fff" }}>{text}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/downloads.png")}>
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
            {this._Button("登記類", () => {
              Linking.openURL("http://www.xh-land.gov.tw/?Guid=88023c0a-1239-d42c-b9b2-6be2c15579f4");
            })}
            {this._Button("測量類", () => {
              Linking.openURL("http://www.xh-land.gov.tw/?Guid=5974b851-a3f8-95d0-dfbe-c7fffd245089");
            })}
            {this._Button("謄本類", () => {
              Linking.openURL("http://www.xh-land.gov.tw/?Guid=610ffbb1-e86b-a592-9d5f-a09081128a22");
            })}
            {this._Button("地價類", () => {
              Linking.openURL("http://www.xh-land.gov.tw/?Guid=ad66791f-4b98-8c8e-5b48-cf0c9438b7bf");
            })}
            {this._Button("地用類", () => {
              Linking.openURL("http://www.xh-land.gov.tw/?Guid=fee0a635-d28a-185d-6fe1-f708631bf72e");
            })}
            {this._Button("檔案類", () => {
              Linking.openURL("http://www.xh-land.gov.tw/?Page=Files&Guid=c2409bd6-ec2b-fc19-1604-3d25c2b66d6e");
            })}
            {this._Button("其他", () => {
              Linking.openURL("http://www.xh-land.gov.tw/?Page=Files&Guid=d7275bd9-83ea-c435-cd8e-7ee77cd4a68b");
            })}
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
