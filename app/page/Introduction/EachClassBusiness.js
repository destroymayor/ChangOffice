/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//各課業務
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class EachClassBusiness extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>第一課辦理業務</Text>
        <Text style={{ fontSize: 20 }}>1.土地建物登記收件、審查、登錄、校對、發狀</Text>
        <Text style={{ fontSize: 20 }}>2.核發登記謄本</Text>
        <Text style={{ fontSize: 20 }}>3.各項規費收取</Text>
        <Text style={{ fontSize: 20 }}>4.地籍資料倉庫管理</Text>
        <Text style={{ fontSize: 20 }}>5.地籍資料電子處理暨統計</Text>
        <Text style={{ fontSize: 20 }}>6.土地電腦作業系統及資料庫管理維護</Text>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>第二課辦理業務</Text>
        <Text style={{ fontSize: 20 }}>1.土地複丈及建物測量</Text>
        <Text style={{ fontSize: 20 }}>2.地籍圖重測、法院囑託測量</Text>
        <Text style={{ fontSize: 20 }}>3.地籍圖謄本及建物成果圖核發</Text>
        <Text style={{ fontSize: 20 }}>4.辦理地權、地用及土地徵收業務</Text>
        <Text style={{ fontSize: 20 }}>5.地籍圖冊資料倉庫管理。</Text>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>第三課辦理業務</Text>
        <Text style={{ fontSize: 20 }}>1.地價動態及市價調查</Text>
        <Text style={{ fontSize: 20 }}>2.辦理公告土地現值及公告地價</Text>
        <Text style={{ fontSize: 20 }}>3.文書收發、檔案管理</Text>
        <Text style={{ fontSize: 20 }}>4.採購暨財產管理、事務管理</Text>
        <Text style={{ fontSize: 20 }}>5.辦理會計及出納事項</Text>
        <Text style={{ fontSize: 20 }}>5.人事、研考業務</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
