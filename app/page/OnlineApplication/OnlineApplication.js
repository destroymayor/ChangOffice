/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//線上申辦
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Btn from '../../utils/Button'

export default class OnlineApplication extends Component {

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
              <Btn styless={ styles.button } ButtonsName='全國地政電子謄本系統' onPress={ this._NavigationBtn.bind(this, 'WebPage', '全國地政電子謄本系統', '') } />
              <Btn styless={ styles.button } ButtonsName='彰化縣地政電傳資訊整合系統' onPress={ this._NavigationBtn.bind(this, 'WebPage', '彰化縣地政電傳資訊整合系統', '') } />
              <Btn styless={ styles.button } ButtonsName='地政電子資料流通服務網' onPress={ this._NavigationBtn.bind(this, 'WebPage', '地政電子資料流通服務網', '') } />
              <Btn styless={ styles.button } ButtonsName='內政部地政司地政線上申辦系統' onPress={ this._NavigationBtn.bind(this, 'WebPage', '內政部地政司地政線上申辦系統', '') } />
              <Btn styless={ styles.button } ButtonsName='內政部國土測繪中心圖資整合資料查詢申購' onPress={ this._NavigationBtn.bind(this, 'WebPage', '內政部國土測繪中心圖資整合資料查詢申購', '') } />
              <Btn styless={ styles.button } ButtonsName='Hinet地政服務' onPress={ this._NavigationBtn.bind(this, 'WebPage', 'Hinet地政服務', '') } />
              <Btn styless={ styles.button } ButtonsName='下班延時預約' onPress={ this._NavigationBtn.bind(this, 'WebPage', '下班延時預約', '') } />
              <Btn styless={ styles.button } ButtonsName='假日預約' onPress={ this._NavigationBtn.bind(this, 'WebPage', '假日預約', '') } />
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
