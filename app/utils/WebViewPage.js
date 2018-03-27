/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, WebView } from "react-native";
import HTMLView from "react-native-htmlview";

import BarClose from "./BarClose";
import screen from "../Style/screen";
import HtmlView from "react-native-htmlview";

export default class WebViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: ""
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.PageName,
    headerTintColor: "#2894ff",
    headerLeft: (
      <BarClose
        onPress={() => {
          navigation.goBack();
        }}
      />
    )
  });

  render() {
    const { params } = this.props.navigation.state;
    const ConnectionWe = `<h3><a href="tel:04-881-3119">點擊聯絡我們:04-881-3119</a></h3>`;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>{this.state.errorText}</Text>
        {params.PageName == "聯絡我們" ? (
          <View style={{ height: 50 }}>
            <HtmlView value={ConnectionWe} />
          </View>
        ) : null}
        <WebView
          enderLoagin={this.renderLoagin}
          style={{ width: screen.width - 10 }}
          source={{ uri: params.PageUrl }}
          automaticallyAdjustContentInsets={false}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
          onError={() => {
            this.setState({
              errorText: "載入失敗請稍後再試！"
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
