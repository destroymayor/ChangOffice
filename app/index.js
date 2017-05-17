/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//主頁
import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, ScrollView, Text, View } from 'react-native';

import Btn from './utils/Button'
import screen from './Style/screen'
import EntypoIcon from 'react-native-vector-icons/Entypo'

export default class index extends Component {

    _NavigationBtn(page) {
        const {navigate} = this.props.navigation;
        navigate(page);
    }

    render() {
        return (
            <View style={ styles.container }>
              <Image style={ { width: screen.width - 10, marginTop: 20, marginBottom: 20 } } source={ require('./image/logo.png') } />
              <View style={ styles.containers }>
                <Btn styless={ [styles.button, { backgroundColor: '#ff00ff', marginTop: 10, position: 'relative', top: 75, left: 10 }] } ButtonsName='公告專區' onPress={ this._NavigationBtn.bind(this, 'Proclamation') } />
                <Btn styless={ [styles.button, { marginTop: 10, position: 'relative', top: 0, right: 5 }] } ButtonsName='查詢專區' onPress={ this._NavigationBtn.bind(this, 'QueryArea') } />
                <Btn styless={ [styles.button, { marginTop: 10, position: 'relative', top: 0, left: 5 }] } ButtonsName='下載專區' onPress={ this._NavigationBtn.bind(this, 'Downloads') } />
                <Btn styless={ [styles.button, { marginTop: 10, position: 'relative', top: 75, right: 10 }] } ButtonsName='試算專區' onPress={ this._NavigationBtn.bind(this, 'TrialCalculation') } />
              </View>
              <View style={ styles.containers }>
                <Btn styless={ styles.mainbutton } ButtonsName='本所簡介' onPress={ this._NavigationBtn.bind(this, 'Introduction') } />
              </View>
              <View style={ styles.containers }>
                <Btn styless={ [styles.button, { marginBottom: 10, position: 'relative', bottom: 50, left: 10 }] } ButtonsName='線上申辦' onPress={ this._NavigationBtn.bind(this, 'OnlineApplication') } />
                <Btn styless={ [styles.button, { backgroundColor: '#ff00ff', marginBottom: 10, position: 'relative', top: 5, right: 5 }] } ButtonsName='檔案應用' onPress={ this._NavigationBtn.bind(this, 'FileApplication') } />
                <Btn styless={ [styles.button, { backgroundColor: '#ff00ff', marginBottom: 10, position: 'relative', top: 5, left: 5 }] } ButtonsName='實價登錄' onPress={ this._NavigationBtn.bind(this, 'PricingLogin') } />
                <Btn styless={ [styles.button, { marginBottom: 10, position: 'relative', bottom: 50, right: 10 }] } ButtonsName='相關連結' onPress={ this._NavigationBtn.bind(this, 'Relatedlink') } />
              </View>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: screen.height,
        width: screen.width
    },
    containers: {
        flexDirection: "row",
        marginTop: 5
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 300
    },
    mainbutton: {
        width: 130,
        height: 130,
        borderRadius: 300
    }
});
