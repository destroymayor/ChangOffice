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
              <Btn styless={ styles.button } ButtonsName='申請須知及書表' onPress={ this._NavigationBtn.bind(this, 'WebPage', '申請須知及書表', '') } />
              <Btn styless={ styles.button } ButtonsName='退費注意事項及申請書表' onPress={ this._NavigationBtn.bind(this, 'WebPage', '退費注意事項及申請書表', '') } />
              <Btn styless={ styles.button } ButtonsName='本所為民服務手冊及本所轄區地段示意圖' onPress={ this._NavigationBtn.bind(this, 'WebPage', '本所為民服務手冊及本所轄區地段示意圖', '') } />
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
