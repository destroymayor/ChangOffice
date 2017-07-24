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
          File1Url: "http://www.xh-land.gov.tw/chaspx/MfileClick.aspx?web=221&id=833&f=2",
          click1: "296",
          File2Url: "http://www.xh-land.gov.tw/chaspx/MfileClick.aspx?web=221&id=833&f=3",
          click2: "240",
          File3Url: "http://www.xh-land.gov.tw/chaspx/MfileClick.aspx?web=221&id=833&f=4",
          click3: "70"
        },
        {
          Line: "02",
          Title: "檔案應用申請書-填寫範例",
          File1Url: "http://www.xh-land.gov.tw/chaspx/MfileClick.aspx?web=221&id=833&f=2",
          click1: "299",
          File2Url: "http://www.xh-land.gov.tw/chaspx/MfileClick.aspx?web=221&id=833&f=3",
          click2: "325",
          File3Url: "http://www.xh-land.gov.tw/chaspx/MfileClick.aspx?web=221&id=833&f=4",
          click3: "65"
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
        <Text style={{ fontSize: 16, margin: 3 }}>
          標題:
          {item.Title}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center", justifyContent: "space-around" }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Btn
              ImageSource={require("../../image/doc.png")}
              ImageStyle={{ width: 80, height: 80 }}
              onPress={() => {
                Linking.openURL(item.File1Url);
              }}
            />
            <Text>
              點閱:
              {item.click1}
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Btn
              ImageSource={require("../../image/pdf.png")}
              ImageStyle={{ width: 80, height: 80 }}
              onPress={() => {
                Linking.openURL(item.File2Url);
              }}
            />
            <Text>
              點閱:
              {item.click2}
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Btn
              ImageSource={require("../../image/odt.png")}
              ImageStyle={{ width: 80, height: 80 }}
              onPress={() => {
                Linking.openURL(item.File3Url);
              }}
            />
            <Text>
              點閱:
              {item.click3}
            </Text>
          </View>
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
