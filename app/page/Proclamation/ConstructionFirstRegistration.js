/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//建物第一次登記
import React, { Component } from 'react';
import { StyleSheet, ListView, Text, View } from 'react-native';

import ConstructionFirstRegistrationData from '../../Data/ConstructionFirstRegistraionData'

export default class ConstructionFirstRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentWillMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(ConstructionFirstRegistrationData)
        });
    }

    render() {
        return (
            <View style={ styles.container }>
              <ListView dataSource={ this.state.dataSource } pageSize={ 1 } initialListSize={ 1 } renderRow={ this.renderRow.bind(this) } />
            </View>
            );
    }

    renderRow(msg) {
        return (
            <View style={ { width: '100%', marginBottom: 10, backgroundColor: '#e0e0e0' } }>
              <Text>
                項次:
                { msg.Line }
              </Text>
              <Text>
                年 字 號:
                { msg.Year }
              </Text>
              <Text>
                公告期間:
                { msg.RightPerson }
              </Text>
              <Text>
                建物座落:
                { msg.DuringTheAnnouncementPeriod }
              </Text>
              <Text>
                所有權人:
                { msg.Lot }
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
