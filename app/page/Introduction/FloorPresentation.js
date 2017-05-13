/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//樓層介紹
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FloorPresentation extends Component {

    render() {
        return (
            <View style={ styles.container }>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
