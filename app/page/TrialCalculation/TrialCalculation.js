/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//試算專區
import React, { Component } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';

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
              <Btn styless={ styles.button } ButtonsName='土地增值稅' onPress={ () => {
                                                                               Linking.openURL('https://www.etax.nat.gov.tw/etwmain/front/ETW158W9')
                                                                           } } />
              <Btn styless={ styles.button } ButtonsName='契稅' onPress={ this._NavigationBtn.bind(this, 'WebPage', '契稅', 'http://www.xh-land.gov.tw/chaspx/search04.aspx?web=91') } />
              <Btn styless={ styles.button } ButtonsName='贈與稅' onPress={ this._NavigationBtn.bind(this, 'WebPage', '贈與稅', 'http://www.xh-land.gov.tw/chaspx/search03.aspx?web=92') } />
              <Btn styless={ styles.button } ButtonsName='遺產稅' onPress={ this._NavigationBtn.bind(this, 'WebPage', '遺產稅', 'http://www.xh-land.gov.tw/chaspx/search02.aspx?web=93') } />
              <Btn styless={ styles.button } ButtonsName='規費' onPress={ this._NavigationBtn.bind(this, 'WebPage', '規費', 'http://www.xh-land.gov.tw/chaspx/search06.aspx?web=95') } />
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
