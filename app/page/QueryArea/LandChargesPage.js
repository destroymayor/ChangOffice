/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//地政規費收費標準 內頁
import React, { Component } from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";

import screen from "../../Style/screen";
import Images from "react-native-transformable-image";

export default class LandChargesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageNumber: null
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.PageName
  });

  componentWillMount() {
    const { params } = this.props.navigation.state;
    const Images =
      params.imageNumber === 1
        ? this.setState({ imageNumber: require("../../image/btn/QueryArea/LandCharges/l1.png") })
        : params.imageNumber === 2
          ? this.setState({ imageNumber: require("../../image/btn/QueryArea/LandCharges/l2.png") })
          : params.imageNumber === 3
            ? this.setState({ imageNumber: require("../../image/btn/QueryArea/LandCharges/l3.png") })
            : this.setState({ imageNumber: require("../../image/btn/QueryArea/LandCharges/l4.png") });
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/queryarea.png")}>
        <Images
          style={{ width: screen.width, height: screen.height }}
          source={this.state.imageNumber}
          pixels={{ width: screen.width, height: screen.height }}
        />
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
