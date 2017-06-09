/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//未辦繼承
import React, { Component } from 'react';
import { FlatList, StyleSheet, Linking, ListView, Text, View } from 'react-native';

import NotInheritedData from '../../Data/NotInheritedData'

export default class NotInherited extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={ styles.container }>
              <FlatList data={ NotInheritedData } keyExtractor={ item => item.Line } initialScrollIndex={ 10 } initialNumToRender={ 10 } renderItem={ this.renderRow }
              />
            </View>
            );
    }

    renderRow({item}) {
        return (
            <View style={ { width: '100%', marginBottom: 10, backgroundColor: '#e0e0e0' } }>
              <Text>
                項次:
                { item.Line }
              </Text>
              <Text>
                年度:
                { item.Year }
              </Text>
              <Text>
                收件案號:
                <Text style={ { color: '#2894ff' } } onPress={ () => {
                                                                   Linking.openURL(msg.ReceiptNumberUrl)
                                                               } }>
                  { item.ReceiptNumber }
                </Text>
              </Text>
              <Text>
                被繼承人姓名:
                { item.TheNameOfTheSuccessor }
              </Text>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    }
});
