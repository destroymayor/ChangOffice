/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//申請書及範例
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class Applicationandexample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exampledata: [{
                Line: '01',
                Title: '檔案應用申請書',
                File1Url: 'http://www.xh-land.gov.tw/chaspx/MfileClick.aspx?web=221&id=833&f=2',
                click1: '296',
                File2Url: 'http://www.xh-land.gov.tw/chaspx/MfileClick.aspx?web=221&id=833&f=3',
                click2: '240',
                File3Url: 'http://www.xh-land.gov.tw/chaspx/MfileClick.aspx?web=221&id=833&f=4',
                click3: '70'
            }, {
                Line: '02',
                Title: '檔案應用申請書-填寫範例',
                File1Url: 'http://www.xh-land.gov.tw/chaspx/MfileClick.aspx?web=221&id=833&f=2',
                click1: '299',
                File2Url: 'http://www.xh-land.gov.tw/chaspx/MfileClick.aspx?web=221&id=833&f=3',
                click2: '325',
                File3Url: 'http://www.xh-land.gov.tw/chaspx/MfileClick.aspx?web=221&id=833&f=4',
                click3: '65'
            }]
        }
    }
    render() {
        return (
            <View style={ styles.container }>
              <FlatList data={ this.state.exampledata } keyExtractor={ item => item.Line } initialScrollIndex={ 10 } initialNumToRender={ 10 } renderItem={ this.renderRow }
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
                標題:
                { item.Title }
              </Text>
              <Text>
                檔案1:
                <Text style={ { color: '#2894ff' } } onPress={ () => {
                                                                   Linking.openURL(item.File1Url)
                                                               } }>
                  下載
                </Text>
              </Text>
              <Text>
                點閱:
                { item.click1 }
              </Text>
              <Text>
                檔案2:
                <Text style={ { color: '#2894ff' } } onPress={ () => {
                                                                   Linking.openURL(item.File2Url)
                                                               } }>
                  下載
                </Text>
              </Text>
              <Text>
                點閱:
                { item.click2 }
              </Text>
              <Text>
                檔案3:
                <Text style={ { color: '#2894ff' } } onPress={ () => {
                                                                   Linking.openURL(item.File3Url)
                                                               } }>
                  下載
                </Text>
              </Text>
              <Text>
                點閱:
                { item.click3 }
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
    },
});
