/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//主頁
import React, { Component } from "react";
import { Dimensions, Image, TouchableOpacity, StyleSheet, ScrollView, Text, View } from "react-native";

import Btn from "./utils/Button";
import screen from "./Style/screen";
import EntypoIcon from "react-native-vector-icons/Entypo";
import SplashScreen from "react-native-splash-screen";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      midwidth: 130,
      midheight: 130,
      midPositionTop: 0,
      width: 80,
      height: 80,
      position_top: 75,
      positionBottom_top: 5
    };
  }

  componentWillMount() {
    if (screen.height >= 900) {
      this.setState({
        height: 130,
        width: 130,
        midheight: 200,
        midwidth: 200,
        midPositionTop: 20,
        position_top: 120,
        positionBottom_top: 30
      });
    }
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  _NavigationBtn(page) {
    const { navigate } = this.props.navigation;
    navigate(page);
  }

  renderBtn = (navigations, styles, Imagesource) => (
    <TouchableOpacity style={styles} onPress={this._NavigationBtn.bind(this, navigations)}>
      <Image
        style={{
          width: this.state.width,
          height: this.state.height
        }}
        resizeMode={Image.resizeMode.contain}
        source={Imagesource}
      />
    </TouchableOpacity>
  );

  render() {
    return (
      <Image
        resizeMode={Image.resizeMode.stretch}
        source={require("../app/image/backgrounds/Zback_01.png")}
        style={styles.container}
      >
        <View style={{ flex: 1 }} />
        <View style={styles.containers}>
          {this.renderBtn(
            "Proclamation",
            [
              styles.button,
              {
                width: this.state.width,
                height: this.state.height,
                marginTop: 15,
                position: "relative",
                top: this.state.position_top,
                left: 10
              }
            ],
            require("./image/btn/index/index_porclamation.png")
          )}
          {this.renderBtn(
            "QueryArea",
            [
              styles.button,
              {
                width: this.state.width,
                height: this.state.height,
                marginTop: 10,
                position: "relative",
                top: 0,
                right: 5
              }
            ],
            require("./image/btn/index/index_query.png")
          )}
          {this.renderBtn(
            "Downloads",
            [
              styles.button,
              {
                width: this.state.width,
                height: this.state.height,
                marginTop: 10,
                position: "relative",
                top: 0,
                left: 5
              }
            ],
            require("./image/btn/index/index_download.png")
          )}
          {this.renderBtn(
            "TrialCalculation",
            [
              styles.button,
              {
                width: this.state.width,
                height: this.state.height,
                marginTop: 10,
                position: "relative",
                top: this.state.position_top,
                right: 10
              }
            ],
            require("./image/btn/index/index_trialcalculation.png")
          )}
        </View>
        <View style={styles.containers}>
          <TouchableOpacity
            style={[
              styles.mainbutton,
              {
                marginTop: this.state.midPositionTop,
                width: this.state.midwidth,
                height: this.state.midheight
              }
            ]}
            onPress={this._NavigationBtn.bind(this, "Introduction")}
          >
            <Image
              style={{
                width: this.state.midwidth,
                height: this.state.midheight
              }}
              resizeMode={Image.resizeMode.contain}
              source={require("./image/btn/index/index_introduction.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containers}>
          {this.renderBtn(
            "OnlineApplication",
            [
              styles.button,
              {
                width: this.state.width,
                height: this.state.height,
                marginTop: 10,
                position: "relative",
                bottom: 50,
                left: 10
              }
            ],
            require("./image/btn/index/index_online.png")
          )}
          {this.renderBtn(
            "FileApplication",
            [
              styles.button,
              {
                width: this.state.width,
                height: this.state.height,
                marginTop: 10,
                position: "relative",
                top: this.state.positionBottom_top,
                right: 5
              }
            ],
            require("./image/btn/index/index_filebtn.png")
          )}
          {this.renderBtn(
            "PricingLogin",
            [
              styles.button,
              {
                width: this.state.width,
                height: this.state.height,
                marginTop: 10,
                position: "relative",
                top: this.state.positionBottom_top,
                left: 5
              }
            ],
            require("./image/btn/index/index_pricinglogin.png")
          )}
          {this.renderBtn(
            "Relatedlink",
            [
              styles.button,
              {
                width: this.state.width,
                height: this.state.height,
                marginTop: 10,
                position: "relative",
                bottom: 50,
                right: 10
              }
            ],
            require("./image/btn/index/index_relatedlink.png")
          )}
        </View>
        <View style={{ flex: 1 }} />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: screen.height,
    width: screen.width,
    backgroundColor: "rgba(255,255,255,2)"
  },
  containers: {
    flexDirection: "row"
  },
  button: {
    borderRadius: 300
  },
  mainbutton: {
    borderRadius: 300
  }
});
