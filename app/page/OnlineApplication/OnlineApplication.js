/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//線上申辦
import React, { Component } from 'react';
import { StyleSheet, Linking, Text, View } from 'react-native';

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
              <Btn styless={ styles.button } ButtonsName='全國地政電子謄本系統' onPress={ this._NavigationBtn.bind(this, 'WebPage', '全國地政電子謄本系統', 'http://210.71.181.102/') } />
              <Btn styless={ styles.button } ButtonsName={ `彰化縣地政電傳${'\n'} 資訊整合系統` } onPress={ this._NavigationBtn.bind(this, 'WebPage', '彰化縣地政電傳資訊整合系統', 'http://pgo-chcgetw.land.nat.gov.tw/HE90_CHHG/chhg_2/plug_in/begin.cfm') } />
              <Btn styless={ styles.button } ButtonsName='地政電子資料流通服務網' onPress={ this._NavigationBtn.bind(this, 'WebPage', '地政電子資料流通服務網', 'http://ccs.land.moi.gov.tw/jsp/HomePageController') } />
              <Btn styless={ styles.button } ButtonsName={ `內政部地政司地政${'\n'}   線上申辦系統` } onPress={ () => Linking.openURL('https://clir.land.moi.gov.tw/cap/?websn=474') } />
              <Btn styless={ styles.button } ButtonsName={ `內政部國土測繪中心圖資${'\n'}   整合資料查詢申購` } onPress={ this._NavigationBtn.bind(this, 'WebPage', '內政部國土測繪中心圖資整合資料查詢申購', 'http://eservice.nlsc.gov.tw/CaseApply/login.aspx') } />
              <Btn styless={ styles.button } ButtonsName='Hinet地政服務' onPress={ this._NavigationBtn.bind(this, 'WebPage', 'Hinet地政服務', 'http://land.hinet.net/index.asp') } />
              <Btn styless={ styles.button } ButtonsName='下班延時預約' onPress={ this._NavigationBtn.bind(this, 'WebPage', '下班延時預約', 'http://www.xh-land.gov.tw/chaspx/Service_Detail.aspx?web=88&id=1479') } />
              <Btn styless={ styles.button } ButtonsName='假日預約' onPress={ this._NavigationBtn.bind(this, 'WebPage', '假日預約', 'http://www.xh-land.gov.tw/chaspx/Service_Detail.aspx?web=88&id=1480') } />
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
        height: 45,
        margin: 5
    }
});
