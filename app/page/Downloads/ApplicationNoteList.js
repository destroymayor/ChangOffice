/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//申請書及範例
import React, { Component } from "react";
import { FlatList, Image, Linking, StyleSheet, Text, View } from "react-native";

import screen from "../../Style/screen";
import Btn from "../../utils/Button";
import List from "./DownloadList.js/index";

export default class ApplicationNoteList extends Component {
  render() {
    const types =
      this.props.navigation.state.params.PageName == "登記類"
        ? List.List1
        : this.props.navigation.state.params.PageName == "測量類"
          ? List.List2
          : this.props.navigation.state.params.PageName == "謄本類"
            ? List.List3
            : this.props.navigation.state.params.PageName == "地價類"
              ? List.List4
              : this.props.navigation.state.params.PageName == "地用類"
                ? List.List5
                : this.props.navigation.state.params.PageName == "檔案類"
                  ? List.List6
                  : this.props.navigation.state.params.PageName == "其他" ? List.List7 : null;

    return (
      <Image style={styles.container} source={require("../../image/backgrounds/fileapplication.png")}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
            backgroundColor: "rgba(255,255,255,0)"
          }}
        >
          <Text style={{ fontSize: 28 }}>{this.props.navigation.state.params.PageName}</Text>
        </View>
        <FlatList
          data={types}
          keyExtractor={(item, index) => index}
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
          backgroundColor: "rgba(255,255,255,0.5)"
        }}
      >
        <Text style={{ fontSize: 18, margin: 3 }}>{item.Title}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            justifyContent: "space-around",
            paddingBottom: 10
          }}
        >
          <Btn
            ImageSource={require("../../image/doc.png")}
            ImageStyle={{ width: 80, height: 80 }}
            onPress={() => {
              Linking.openURL(item.File1DOC);
            }}
          />
          <Btn
            ImageSource={require("../../image/pdf.png")}
            ImageStyle={{ width: 80, height: 80 }}
            onPress={() => {
              Linking.openURL(item.File2PDF);
            }}
          />
          <Btn
            ImageSource={require("../../image/odt.png")}
            ImageStyle={{ width: 80, height: 80 }}
            onPress={() => {
              Linking.openURL(item.File3ODT);
            }}
          />
        </View>
      </View>
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
