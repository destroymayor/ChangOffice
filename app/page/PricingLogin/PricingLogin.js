/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//實價登錄
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Btn from '../../utils/Button'

export default class PricingLogin extends Component {

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
              <Btn styless={ styles.button } ButtonsName='申報書下載' onPress={ this._NavigationBtn.bind(this, 'WebPage', '申報書下載', '') } />
              <Btn styless={ styles.button } ButtonsName='實價登錄申報網' onPress={ this._NavigationBtn.bind(this, 'WebPage', '實價登錄申報網', '') } />
              <Btn styless={ styles.button } ButtonsName='不動產交易資訊查詢網' onPress={ this._NavigationBtn.bind(this, 'WebPage', '不動產交易資訊查詢網', '') } />
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
