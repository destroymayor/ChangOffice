/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//檔案應用
import React, { Component } from "react";
import { StyleSheet, Image, Platform, Linking, Text, View } from "react-native";

import Btn from "../../utils/Button";
import screen from "../../Style/screen";

export default class FileApplication extends Component {
  _NavigationBtn(page) {
    const { navigate } = this.props.navigation;
    navigate(page);
  }

  _NavigationBtnWeb(page, PageName, PageUrl) {
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
      <Image style={styles.container} source={require("../../image/backgrounds/fileapplication.png")}>
        <Btn
          ImageSource={require("../../image/btn/FileApplication/f1.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={() => {
            Linking.openURL(
              "http://www.xh-land.bexweb.tw/?Page=ModifyFormBody&Guid=ddea0a59-bdfa-82c6-79f4-8a1168c64c44"
            );
          }}
        />
        <Btn
          ImageSource={require("../../image/btn/FileApplication/f2.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(this, "ArchivesApplicationNotes")}
        />
        <Btn
          ImageSource={require("../../image/btn/FileApplication/f3.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(this, "Applicationandexample")}
        />
        <Btn
          ImageSource={require("../../image/btn/FileApplication/f4.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(this, "JobflowChart")}
        />
        <Btn
          ImageSource={require("../../image/btn/FileApplication/f5.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={this._NavigationBtn.bind(this, "Charges")}
        />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screen.width,
    height: screen.height
  }
});
