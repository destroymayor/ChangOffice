/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//建物第一次登記
import React, { Component } from 'react';
import { FlatList, StyleSheet, ListView, Text, View } from 'react-native';

import ConstructionFirstRegistrationData from '../../Data/ConstructionFirstRegistraionData'

export default class ConstructionFirstRegistration extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={ styles.container }>
              <FlatList data={ ConstructionFirstRegistrationData } keyExtractor={ item => item.Line } initialScrollIndex={ 10 } initialNumToRender={ 10 } renderItem={ this.renderRow }
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
                年 字 號:
                { item.Year }
              </Text>
              <Text>
                公告期間:
                { item.RightPerson }
              </Text>
              <Text>
                建物座落:
                { item.DuringTheAnnouncementPeriod }
              </Text>
              <Text>
                所有權人:
                { item.Lot }
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
