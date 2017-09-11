/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//FB粉絲專頁及Youtube影音頻道
import React, { Component } from "react";
import { StyleSheet, Button, TouchableOpacity, Platform, Linking, Image, Text, View } from "react-native";

import screen from "../../Style/screen";
import Btn from "../../utils/Button";

export default class FBandYoutube extends Component {
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
      <Image style={styles.container} source={require("../../image/backgrounds/introduction.png")}>
        <TouchableOpacity
          title="FaceBook"
          style={styles.btn}
          onPress={this._NavigationBtnWeb.bind(
            this,
            "WebPage",
            "FaceBook",
            "https://www.facebook.com/xihuland/"
          )}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>FaceBook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="FaceBook"
          style={[styles.btn, { marginTop: 20 }]}
          onPress={this._NavigationBtnWeb.bind(
            this,
            "WebPage",
            "FaceBook",
            "https://www.youtube.com/channel/UC6JBfN88gZdqrSqUEnh8VMg"
          )}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>YouTube</Text>
        </TouchableOpacity>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: screen.width,
    height: screen.height
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 50,
    backgroundColor: "rgb(149,41,23)",
    borderRadius: 10
  }
});
