/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//書狀補給
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import BooklikeSupplyData from '../../Data/BookikeSupplyData';

export default class BooklikeSupply extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={ styles.container }>
              <FlatList data={ BooklikeSupplyData } keyExtractor={ item => item.Line } initialScrollIndex={ 10 } initialNumToRender={ 10 } renderItem={ this.renderRow }
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
                權利人:
                { item.RightPerson }
              </Text>
              <Text>
                公告期間:
                { item.DuringTheAnnouncementPeriod }
              </Text>
              <Text>
                地段:
                { item.Lot }
              </Text>
              <Text>
                地號建號:
                { item.LandmarkKeyNumber }
              </Text>
              <Text>
                書狀號:
                { item.BookNumber }
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
