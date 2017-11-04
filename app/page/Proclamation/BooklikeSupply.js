/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//書狀補給
import React, { Component } from "react";
import { FlatList, StyleSheet, Image, Text, View } from "react-native";

import BooklikeSupplyData from "../../Data/BookikeSupplyData";
import screen from "../../Style/screen";

export default class BooklikeSupply extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/proclamation.png")}>
        <FlatList
          data={BooklikeSupplyData}
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
      <View style={styles.BooklikeSupplyItemView}>
        <Text style={styles.BooklikeSupplyItemText}>
          項次:
          {item.Line}
        </Text>
        <Text style={styles.BooklikeSupplyItemText}>
          年 字 號:
          {item.Year}
        </Text>
        <Text style={styles.BooklikeSupplyItemText}>
          權利人:
          {item.RightPerson}
        </Text>
        <Text style={styles.BooklikeSupplyItemText}>
          公告期間:
          {item.DuringTheAnnouncementPeriod}
        </Text>
        <Text style={styles.BooklikeSupplyItemText}>
          地段:
          {item.Lot}
        </Text>
        <Text style={styles.BooklikeSupplyItemText}>
          地號建號:
          {item.LandmarkKeyNumber}
        </Text>
        <Text style={styles.BooklikeSupplyItemText}>
          書狀號:
          {item.BookNumber}
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
  },
  BooklikeSupplyItemView: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.4)"
  },
  BooklikeSupplyItemText: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 2
  }
});
