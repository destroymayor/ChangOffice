/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//申報書下載
import React, { Component } from "react";
import { FlatList, Linking, Image, StyleSheet, Text, View } from "react-native";

import screen from "../../Style/screen";
import Btn from "../../utils/Button";

export default class DeclarationBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampledata: [
        {
          Line: "01",
          Title: "實價登錄申報書填寫範例",
          File1Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=45f9bee6-97cb-c367-2e06-719a3f8ffb2a",
          File2Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=73b312aa-9d32-c5f2-2899-8884fa93cf01",
          File3Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=7187fac2-5fb0-6883-c7be-0987d9a8389f"
        },
        {
          Line: "02",
          Title: "實價登錄申報書填寫說明",
          File1Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=8144cd3f-ce18-99e1-2722-ec2aefd05921",
          File2Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=e453c97d-b87f-4217-428d-76379659fc16",
          File3Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=e8bccd3a-d118-9f01-2739-071c98539b38"
        },
        {
          Line: "03",
          Title: "實價登錄申報書",
          File1Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=5ba8e6a7-b7a1-2294-ff2d-c87fc1b168c9",
          File2Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=97e667e9-01ea-479a-6a15-4a0f111eb711",
          File3Url: "http://www.xh-land.gov.tw/lib/GetFile.php?fil_guid=7294d933-61db-d22f-415e-25e0893892e3"
        }
      ]
    };
  }
  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/pricinglogin.png")}>
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
      <View style={styles.DeclarationBookItemView}>
        <Text style={{ fontSize: 20, margin: 3 }}>項次 {item.Line}</Text>
        <Text style={{ fontSize: 18, margin: 3 }}>{item.Title}</Text>
        <View style={{ flexDirection: "row", justifyContent: "center", justifyContent: "space-around" }}>
          <Btn
            ImageSource={require("../../image/doc.png")}
            ImageStyle={{ width: 100, height: 100 }}
            onPress={() => {
              Linking.openURL(item.File1Url);
            }}
          />
          <Btn
            ImageSource={require("../../image/pdf.png")}
            ImageStyle={{ width: 100, height: 100 }}
            onPress={() => {
              Linking.openURL(item.File2Url);
            }}
          />
          <Btn
            ImageSource={require("../../image/odt.png")}
            ImageStyle={{ width: 100, height: 100 }}
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
  },
  DeclarationBookItemView: {
    width: "100%",
    marginBottom: 10,
    paddingBottom: 10,
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.5)"
  }
});
