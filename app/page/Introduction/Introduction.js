/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//本所簡介
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Btn from '../../utils/Button'

export default class Introduction extends Component {

    _NavigationBtn(page) {
        const {navigate} = this.props.navigation;
        navigate(page);
    }

    render() {
        return (
            <View style={ styles.container }>
              <Btn styless={ styles.button } ButtonsName='本所轄區' onPress={ this._NavigationBtn.bind(this, 'QurArea') } />
              <Btn styless={ styles.button } ButtonsName='位置交通' onPress={ this._NavigationBtn.bind(this, 'LocationTraffic') } />
              <Btn styless={ styles.button } ButtonsName='辦公時間' onPress={ this._NavigationBtn.bind(this, 'OfficeHours') } />
              <Btn styless={ styles.button } ButtonsName='各課業務' onPress={ this._NavigationBtn.bind(this, 'EachClassBusiness') } />
              <Btn styless={ styles.button } ButtonsName='樓層介紹' onPress={ this._NavigationBtn.bind(this, 'FloorPresentation') } />
              <Btn styless={ styles.button } ButtonsName={ `     FB粉絲專頁${'\n'}Youtube影音頻道` } onPress={ this._NavigationBtn.bind(this, 'FBandYoutube') } />
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
    },
});
