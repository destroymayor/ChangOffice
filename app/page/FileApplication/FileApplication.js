/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//檔案應用
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FileApplication extends Component {
    render() {
        return (
            <View style={ styles.container }>
              <Text style={ styles.welcome }>
                檔案線上申請 在app裡連結外部
              </Text>
              <Text>檔案應用閱覽須知 app</Text>
              <Text>申請書及範例（中英日文版） app</Text>
              <Text>作業流程圖 app</Text>
              <Text>收費標準 app</Text>
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
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
