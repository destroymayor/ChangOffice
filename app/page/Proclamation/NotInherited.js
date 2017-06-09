/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//未辦繼承
import React, { Component } from 'react';
import { StyleSheet, Linking, ListView, Text, View } from 'react-native';

import NotInheritedData from '../../Data/NotInheritedData'

export default class NotInherited extends Component {
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
            dataSource: this.state.dataSource.cloneWithRows(NotInheritedData)
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
                年度:
                { msg.Year }
              </Text>
              <Text>
                收件案號:
                <Text style={ { color: '#2894ff' } } onPress={ () => {
                                                                   Linking.openURL(msg.ReceiptNumberUrl)
                                                               } }>
                  { msg.ReceiptNumber }
                </Text>
              </Text>
              <Text>
                被繼承人姓名:
                { msg.TheNameOfTheSuccessor }
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
