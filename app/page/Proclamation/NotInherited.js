/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//未辦繼承
import React, { Component } from "react";
import { FlatList, StyleSheet, Image, Linking, ListView, Text, View } from "react-native";

import NotInheritedData from "../../Data/NotInheritedData";
import screen from "../../Style/screen";

export default class NotInherited extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/proclamation.png")}>
        <FlatList
          data={NotInheritedData}
          keyExtractor={item => item.Line}
          initialScrollIndex={10}
          initialNumToRender={10}
          renderItem={this.renderRow}
        />
      </Image>
    );
  }

  renderRow({ item }) {
    return (
      <View
        style={{
          width: "100%",
          marginBottom: 10,
          backgroundColor: "rgba(255,255,255,0.4)"
        }}
      >
        <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 2 }}>
          項次：
          {item.Line}
        </Text>
        <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 2 }}>
          年度：
          {item.Year}
        </Text>
        <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 2 }}>
          收件案號：
          <Text
            style={{ color: "#2894ff" }}
            onPress={() => {
              Linking.openURL(item.ReceiptNumberUrl);
            }}
          >
            {item.ReceiptNumber}
          </Text>
        </Text>
        <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 2 }}>
          被繼承人姓名：
          {item.TheNameOfTheSuccessor}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: screen.width,
    height: screen.height
  }
});
