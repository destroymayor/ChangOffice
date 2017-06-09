/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//本所轄區
import React, { Component } from 'react';
import { StyleSheet, ListView, Text, View } from 'react-native';

export default class QurArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentWillMount() {
        data = [
            {
                Township: "溪湖鎮",
                NumberofSegments: "38",
                NumberOfLand: "47677",
                BuildingTheNumber: "11073",
                LandArea: "3059"
            },
            {
                Township: "埔心鄉",
                NumberofSegments: "20",
                NumberOfLand: "29634",
                BuildingTheNumber: "6372",
                LandArea: "2093"
            },
            {
                Township: "埔鹽鄉",
                NumberofSegments: "20",
                NumberOfLand: "32154",
                BuildingTheNumber: "3245",
                LandArea: "3740"
            },
            {
                Township: "合計",
                NumberofSegments: "78",
                NumberOfLand: "109465",
                BuildingTheNumber: "20960",
                LandArea: "8892"
            }
        ];
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data)
        });
    }

    render() {
        return (
            <View style={ styles.container }>
              <Text>本所轄區包括溪湖鎮、埔心鄉、埔鹽鄉三鄉鎮</Text>
              <ListView dataSource={ this.state.dataSource } pageSize={ 1 } initialListSize={ 1 } renderRow={ this.renderRow.bind(this) } />
              <Text>本表資料統計至104 年5 月31 日止</Text>
            </View>
            );
    }

    renderRow(msg) {
        return (
            <View style={ { width: '100%', marginBottom: 10, backgroundColor: '#e0e0e0' } }>
              <Text>
                鄉鎮別:
                { msg.Township }
              </Text>
              <Text>
                段數:
                { msg.NumberofSegments }
              </Text>
              <Text>
                土地筆數:
                { msg.NumberOfLand }
              </Text>
              <Text>
                建物棟數:
                { msg.BuildingTheNumber }
              </Text>
              <Text>
                土地面積公頃:
                { msg.LandArea }
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
