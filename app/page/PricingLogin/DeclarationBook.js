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
          Title: "書表下載",
          File1Url: "http://www.xh-land.gov.tw/chaspx/MfileClick.aspx?web=235&id=1049&f=2",
          click1: "193",
          File2Url: "http://www.xh-land.gov.tw/chaspx/MfileClick.aspx?web=235&id=1049&f=3",
          click2: "170"
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
              ImageStyle={{ width: 100, height: 100 }}
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
              ImageStyle={{ width: 100, height: 100 }}
              onPress={() => {
                Linking.openURL(item.File2Url);
              }}
            />
            <Text>
              點閱:
              {item.click2}
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
  },
  DeclarationBookItemView: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.5)"
  }
});
