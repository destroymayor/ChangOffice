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

export default class Applicationandexample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampledata: [
        {
          Line: "01",
          Title: "檔案應用申請書",
          File1Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=6f2c354c-86b6-4196-eda0-3e1dbacdbdb0",
          File2Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=8023a992-6274-655d-e6f4-5dcfa911b1db",
          File3Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=6d5d3708-03bb-5171-3da5-5a4963e06284"
        },
        {
          Line: "02",
          Title: "檔案應用申請書-填寫範例",
          File1Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=e21163e4-9ff3-1087-a433-1616c31c7f1e",
          File2Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=e4524f87-aa1b-7daa-73eb-6987765e5be3",
          File3Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=885c3e5f-0221-bff6-3edc-4a2c02483025"
        }
      ]
    };
  }
  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/fileapplication.png")}>
        <FlatList
          data={this.state.exampledata}
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
          backgroundColor: "rgba(255,255,255,0.5)"
        }}
      >
        <Text style={{ fontSize: 20, margin: 3 }}>
          項次:
          {item.Line}
        </Text>
        <Text style={{ fontSize: 18, margin: 3 }}>
          標題:
          {item.Title}
        </Text>
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
              Linking.openURL(item.File1Url);
            }}
          />
          <Btn
            ImageSource={require("../../image/pdf.png")}
            ImageStyle={{ width: 80, height: 80 }}
            onPress={() => {
              Linking.openURL(item.File2Url);
            }}
          />
          <Btn
            ImageSource={require("../../image/odt.png")}
            ImageStyle={{ width: 80, height: 80 }}
            onPress={() => {
              Linking.openURL(item.File3Url);
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
    height: screen.height,
    justifyContent: "center"
  }
});
