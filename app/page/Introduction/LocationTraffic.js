/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//位置交通
import React, { Component } from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";

import screen from "../../Style/screen";
import Images from "react-native-transformable-image";

export default class LocationTraffic extends Component {
  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/introduction.png")}>
        <Images
          style={{ width: screen.width, height: "70%" }}
          source={require("../../image/map.png")}
          pixels={{ width: screen.width, height: screen.height }}
        />
        <ScrollView>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10
            }}
          >
            中山高( 國道1 號 ) 下員林交流道( 中心里程211 )
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 17,
              marginLeft: 10,
              marginRight: 10
            }}
          >
            往溪湖方向→員鹿路( 148 縣道 ) →直走接二溪路( 148 縣道 ) →過西環路後第一個紅綠燈右轉大公路99 號
            {"\n"}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#fff",
              marginLeft: 10,
              marginRight: 10
            }}
          >
            公車( 由員林客運公司溪湖站下車後，步行約15 分鐘)
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 17,
              marginLeft: 10,
              marginRight: 10
            }}
          >
            員鹿路( 148 縣道 ) →直走接二溪路( 148 縣道 ) →過西環路後第一個紅綠燈右轉大公路99 號。
            {"\n"}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#fff",
              marginLeft: 10,
              marginRight: 10
            }}
          >
            統聯客運( 由統聯客運公司溪湖站下車後，步行約5 分鐘)
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "#fff",
              marginLeft: 10,
              marginRight: 10
            }}
          >
            二溪路右轉大公路99 號
            {"\n"}
          </Text>
        </ScrollView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screen.width,
    height: screen.height,
    backgroundColor: "transparent"
  }
});
