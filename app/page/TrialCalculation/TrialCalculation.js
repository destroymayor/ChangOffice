/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//試算專區
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Btn from '../../utils/Button'

export default class TrialCalculation extends Component {

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
              <Btn styless={ styles.button } ButtonsName='土地增值稅' onPress={ this._NavigationBtn.bind(this, 'WebPage', '土地增值稅', '') } />
              <Btn styless={ styles.button } ButtonsName='契稅' onPress={ this._NavigationBtn.bind(this, 'WebPage', '契稅', '') } />
              <Btn styless={ styles.button } ButtonsName='贈與稅' onPress={ this._NavigationBtn.bind(this, 'WebPage', '贈與稅', '') } />
              <Btn styless={ styles.button } ButtonsName='遺產稅' onPress={ this._NavigationBtn.bind(this, 'WebPage', '遺產稅', '') } />
              <Btn styless={ styles.button } ButtonsName='規費' onPress={ this._NavigationBtn.bind(this, 'WebPage', '規費', '') } />
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
