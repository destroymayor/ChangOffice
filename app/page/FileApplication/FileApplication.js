/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//檔案應用
import React, { Component } from 'react';
import { StyleSheet, Linking, Text, View } from 'react-native';

import Btn from '../../utils/Button'

export default class FileApplication extends Component {

    _NavigationBtn(page) {
        const {navigate} = this.props.navigation;
        navigate(page);
    }

    render() {
        return (
            <View style={ styles.container }>
              <Btn styless={ styles.button } ButtonsName='檔案線上申請' onPress={ () => {
                                                                                Linking.openURL('http://www.xh-land.gov.tw/chaspx/Apply.aspx?web=59')
                                                                            } } />
              <Btn styless={ styles.button } ButtonsName='檔案應用閱覽須知' onPress={ this._NavigationBtn.bind(this, 'ArchivesApplicationNotes') } />
              <Btn styless={ styles.button } ButtonsName='申請書及範例' onPress={ this._NavigationBtn.bind(this, 'Applicationandexample') } />
              <Btn styless={ styles.button } ButtonsName='作業流程圖' onPress={ this._NavigationBtn.bind(this, 'JobflowChart') } />
              <Btn styless={ styles.button } ButtonsName='收費標準' onPress={ this._NavigationBtn.bind(this, 'Charges') } />
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
        margin: 10,
        width: 130,
        height: 60
    }
});
