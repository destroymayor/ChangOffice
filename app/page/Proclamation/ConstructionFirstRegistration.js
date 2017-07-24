/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//建物第一次登記
import React, { Component } from "react";
import { FlatList, StyleSheet, Image, ListView, Text, View } from "react-native";

import ConstructionFirstRegistrationData from "../../Data/ConstructionFirstRegistraionData";
import screen from "../../Style/screen";

export default class ConstructionFirstRegistration extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/proclamation.png")}>
        <FlatList
          data={ConstructionFirstRegistrationData}
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
          年 字 號：
          {item.Year}
        </Text>
        <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 2 }}>
          公告期間：
          {item.RightPerson}
        </Text>
        <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 2 }}>
          建物座落：
          {item.DuringTheAnnouncementPeriod}
        </Text>
        <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 2 }}>
          所有權人：
          {item.Lot}
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
