//聯絡我們
import React, { Component } from "react";
import { StyleSheet, Image, Platform, Linking, ScrollView, TouchableOpacity, Text, View } from "react-native";

import Btn from "../../utils/Button";
import screen from "../../Style/screen";
import HtmlView from "react-native-htmlview";

export default class ContactUs extends Component {
  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/introduction.png")}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <Image
            resizeMode={Image.resizeMode.contain}
            style={{ width: screen.width, height: 300, marginBottom: 20 }}
            source={require("./image/phonecall.png")}
          />
          <HtmlView stylesheet={styleHTML} value={`<h3><a href="tel:04-881-3119">點擊我，立即與我們取得聯繫</a></h3>`} />
        </View>
      </Image>
    );
  }
}

const styleHTML = StyleSheet.create({
  h3: {
    backgroundColor: "rgba(0,0,0,0)",
    width: screen.width - 30,
    textAlign: "center"
  },
  a: {
    backgroundColor: "rgba(0,0,0,0)",
    width: screen.width - 30,
    textAlign: "center",
    fontSize: 20
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: screen.width,
    height: screen.height
  }
});
