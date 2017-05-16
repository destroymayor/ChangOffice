/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//下載專區
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Btn from '../../utils/Button'

export default class Dowunloads extends Component {

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
              <Btn styless={ styles.button } ButtonsName='申請須知及書表' onPress={ this._NavigationBtn.bind(this, 'WebPage', '申請須知及書表', 'http://www.xh-land.gov.tw/chaspx/download3.aspx?web=97') } />
              <Btn styless={ styles.button } ButtonsName='退費注意事項及申請書表' onPress={ this._NavigationBtn.bind(this, 'WebPage', '退費注意事項及申請書表', 'http://www.xh-land.gov.tw/chaspx/download.aspx?web=260') } />
              <Btn styless={ styles.button } ButtonsName={ `本所為民服務手冊及${'\n'}本所轄區地段示意圖` } onPress={ this._NavigationBtn.bind(this, 'WebPage', '本所為民服務手冊及本所轄區地段示意圖', 'http://www.xh-land.gov.tw/chaspx/download.aspx?web=100') } />
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
