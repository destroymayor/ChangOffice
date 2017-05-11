import React, {Component} from "react";
import {StyleSheet, View, TouchableOpacity, Text} from "react-native";

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                style={[styles.Buttons, this.props.styless]}
                onPress={this.props.onPress}>
                <Text style={{
                    color: "#ffffff"
                }}>
                    {this.props.ButtonsName}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    Buttons: {
        backgroundColor: "#2894ff",
        borderRadius: 3,
        borderColor: "#2894ff",
        alignItems: 'center',
        justifyContent: 'center'
    }
});