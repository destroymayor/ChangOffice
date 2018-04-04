/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//下載專區
import React, { Component } from "react";
import { Platform, Linking, Image, StyleSheet, ScrollView, TouchableOpacity, Text, View } from "react-native";

import screen from "../../Style/screen";
import Btns from "../../utils/Btn";

export default class ApplicationNote extends Component {
  _NavigationBtn(PageName) {
    const { navigate } = this.props.navigation;
    navigate("ApplicationNoteList", {
      PageName: PageName
    });
  }

  _Button = (text, onPress) => (
    <Btns text={text} onPress={onPress} textSize={{ fontSize: 24 }} styless={{ backgroundColor: "rgb(38,116,152)", marginTop: 20 }} />
  );

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/downloads.png")}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              width: screen.width,
              height: screen.height
            }}
          >
            {this._Button("登記類", () => this._NavigationBtn("登記類"))}
            {this._Button("測量類", () => this._NavigationBtn("測量類"))}
            {this._Button("謄本類", () => this._NavigationBtn("謄本類"))}
            {this._Button("地價類", () => this._NavigationBtn("地價類"))}
            {this._Button("地用類", () => this._NavigationBtn("地用類"))}
            {this._Button("檔案類", () => this._NavigationBtn("檔案類"))}
            {this._Button("其他", () => this._NavigationBtn("其他"))}
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
