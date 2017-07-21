/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, WebView } from "react-native";

import BarClose from "./BarClose";
import screen from "../Style/screen";

export default class WebViewPage extends Component {
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
    console.log(params.PageUrl);
    return (
      <View style={styles.container}>
        <WebView
          enderLoagin={this.renderLoagin}
          style={{ width: screen.width - 10 }}
          source={{ uri: params.PageUrl }}
          automaticallyAdjustContentInsets={false}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
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
