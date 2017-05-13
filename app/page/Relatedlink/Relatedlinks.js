/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//相關連結
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Btn from '../../utils/Button'

export default class Relatedlink extends Component {

    _NavigationBtn(page, PageName, PageUrl) {
        const {navigate} = this.props.navigation;
        navigate(page, {
            PageName: PageName,
            PageUrl: PageUrl
        });
    }

    render() {
        return (
            <View style={ styles.container }>
              <Btn styless={ styles.button } ButtonsName='彰化縣各地政事務所' onPress={ this._NavigationBtn.bind(this, 'WebPage', '彰化縣各地政事務所', '') } />
              <Btn styless={ styles.button } ButtonsName='內政部地政司' onPress={ this._NavigationBtn.bind(this, 'WebPage', '內政部地政司', '') } />
              <Btn styless={ styles.button } ButtonsName='彰化縣政府' onPress={ this._NavigationBtn.bind(this, 'WebPage', '彰化縣政府', '') } />
              <Btn styless={ styles.button } ButtonsName='溪湖埔心埔鹽鄉鎮公所' onPress={ this._NavigationBtn.bind(this, 'WebPage', '溪湖埔心埔鹽鄉鎮公所', '') } />
              <Btn styless={ styles.button } ButtonsName='溪湖埔心埔鹽戶政事務所' onPress={ this._NavigationBtn.bind(this, 'WebPage', '溪湖埔心埔鹽戶政事務所', '') } />
              <Btn styless={ styles.button } ButtonsName='中區國稅局' onPress={ this._NavigationBtn.bind(this, 'WebPage', '中區國稅局', '') } />
              <Btn styless={ styles.button } ButtonsName='彰化縣地方稅務局' onPress={ this._NavigationBtn.bind(this, 'WebPage', '彰化縣地方稅務局', '') } />
              <Btn styless={ styles.button } ButtonsName='房地合一專區' onPress={ this._NavigationBtn.bind(this, 'WebPage', '房地合一專區', '') } />
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
    },
    button: {
        width: 200,
        height: 35,
        margin: 5
    }
});
