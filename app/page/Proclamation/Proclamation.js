/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//公告專區
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Btn from "../../utils/Button";

export default class Proclamation extends Component {
  _NavigationBtn(page) {
    const { navigate } = this.props.navigation;
    navigate(page);
  }

  render() {
    return (
      <View style={styles.container}>
        <Btn
          styless={styles.button}
          ButtonsName="書狀補給"
          onPress={this._NavigationBtn.bind(this, "BooklikeSupply")}
        />
        <Btn
          styless={styles.button}
          ButtonsName="土地第一次登記"
          onPress={this._NavigationBtn.bind(this, "LandFirstRegistration")}
        />
        <Btn
          styless={styles.button}
          ButtonsName="建物第一次登記"
          onPress={this._NavigationBtn.bind(
            this,
            "ConstructionFirstRegistration"
          )}
        />
        <Btn
          styless={styles.button}
          ButtonsName="未辦繼承"
          onPress={this._NavigationBtn.bind(this, "NotInherited")}
        />
        <Btn
          styless={styles.button}
          ButtonsName="地籍清理"
          onPress={this._NavigationBtn.bind(this, "CadastralCleaning")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  button: {
    margin: 10,
    width: 180,
    height: 60
  }
});
