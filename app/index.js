/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//主頁
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Btn from './utils/Button'

export default class index extends Component {

    _NavigationBtn(page) {
        const {navigate} = this.props.navigation;
        navigate(page);
    }

    render() {
        return (
            <View style={styles.container}>
                <Btn
                    styless={styles.button}
                    ButtonsName='本所簡介'
                    onPress={this
                    ._NavigationBtn
                    .bind(this, 'Introduction')}/>
                <Btn
                    styless={styles.button}
                    ButtonsName='公告專區'
                    onPress={this
                    ._NavigationBtn
                    .bind(this, 'Proclamation')}/>
                <Btn
                    styless={styles.button}
                    ButtonsName='試算專區'
                    onPress={this
                    ._NavigationBtn
                    .bind(this, 'TrialCalculation')}/>
                <Btn
                    styless={styles.button}
                    ButtonsName='線上申辦'
                    onPress={this
                    ._NavigationBtn
                    .bind(this, 'OnlineApplication')}/>
                <Btn
                    styless={styles.button}
                    ButtonsName='實價登錄'
                    onPress={this
                    ._NavigationBtn
                    .bind(this, 'PricingLogin')}/>
                <Btn
                    styless={styles.button}
                    ButtonsName='相關連結'
                    onPress={this
                    ._NavigationBtn
                    .bind(this, 'Relatedlink')}/>
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
        width: 100,
        height: 30
    }
});
