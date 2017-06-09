/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//地籍清理等公告
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CadastralCleaning extends Component {

    render() {
        return (
            <View style={ styles.container }>
              <Text>暫無資料</Text>
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
