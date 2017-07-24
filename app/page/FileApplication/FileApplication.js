/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//檔案應用
import React, { Component } from "react";
import { StyleSheet, Image, Linking, Text, View } from "react-native";

import Btn from "../../utils/Button";
import screen from "../../Style/screen";

export default class FileApplication extends Component {
  _NavigationBtn(page) {
    const { navigate } = this.props.navigation;
    navigate(page);
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/fileapplication.png")}>
        <Btn
          ImageSource={require("../../image/btn/FileApplication/f1.png")}
          ImageStyle={{ width: 180, height: 90 }}
          onPress={() => {
            Linking.openURL("http://www.xh-land.gov.tw/chaspx/Apply.aspx?web=59");
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
    height: screen.height,
    justifyContent: "center"
  }
});
