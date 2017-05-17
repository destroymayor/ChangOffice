/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//辦公時間
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class OfficeHours extends Component {

    render() {
        return (
            <View style={ styles.container }>
              <Text>
                週一至週五(例假日及國定假日除外)
              </Text>
              <Text>上午08：00～12：00
              </Text>
              <Text>
                下午13：30～17：30 </Text>
              <Text>中午休息時間(12：00～13：30)照常受理送件、領件、謄本核發。</Text>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});
