/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//檔案應用
import React, { Component } from "react";

import { StyleSheet, Image, Platform, Linking, Text, View } from "react-native";

import Btns from "../../utils/Btn";
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
        <Btns
          text={"檔案線上申請"}
          onPress={() => {
            Linking.openURL("http://www.xh-land.gov.tw/?Page=ModifyFormBody&Guid=ddea0a59-bdfa-82c6-79f4-8a1168c64c44");
          }}
          textSize={{ fontSize: 24 }}
          styless={{ backgroundColor: "rgb(168,47,51)", marginTop: 20 }}
        />
        <Btns
          text={"檔案應用閱覽須知"}
          onPress={this._NavigationBtn.bind(this, "ArchivesApplicationNotes")}
          textSize={{ fontSize: 24 }}
          styless={{ backgroundColor: "rgb(168,47,51)", marginTop: 20 }}
        />
        <Btns
          text={"申請書及範例"}
          onPress={this._NavigationBtn.bind(this, "Applicationandexample")}
          textSize={{ fontSize: 24 }}
          styless={{ backgroundColor: "rgb(168,47,51)", marginTop: 20 }}
        />
        <Btns
          text={"作業流程圖"}
          onPress={this._NavigationBtn.bind(this, "JobflowChart")}
          textSize={{ fontSize: 24 }}
          styless={{ backgroundColor: "rgb(168,47,51)", marginTop: 20 }}
        />
        <Btns
          text={"收費標準"}
          onPress={this._NavigationBtn.bind(this, "Charges")}
          textSize={{ fontSize: 24 }}
          styless={{ backgroundColor: "rgb(168,47,51)", marginTop: 20 }}
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
