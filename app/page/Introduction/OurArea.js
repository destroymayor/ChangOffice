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
              <View style={ { width: '100%', flexDirection: 'row', justifyContent: 'space-around' } }>
                <Text style={ { width: '20%' } }>鄉鎮別</Text>
                <Text style={ { width: '20%' } }>段數</Text>
                <Text style={ { width: '20%' } }>土地筆數</Text>
                <Text style={ { width: '20%' } }>建物棟數</Text>
                <Text style={ { width: '20%' } }>土地面積
                  { '\n' }(公頃)</Text>
              </View>
              <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow.bind(this) } />
              <Text>本表資料統計至104 年5 月31 日止</Text>
            </View>
            );
    }

    renderRow(msg) {
        return (
            <View style={ { width: '100%', flexDirection: 'row', backgroundColor: '#ff0' } }>
              <Text style={ { width: '20%' } }>
                { msg.Township }
              </Text>
              <Text style={ { width: '20%' } }>
                { msg.NumberofSegments }
              </Text>
              <Text style={ { width: '20%' } }>
                { msg.NumberOfLand }
              </Text>
              <Text style={ { width: '20%' } }>
                { msg.BuildingTheNumber }
              </Text>
              <Text style={ { width: '20%' } }>
                { msg.LandArea }
              </Text>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
