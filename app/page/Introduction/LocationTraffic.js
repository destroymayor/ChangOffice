/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//位置交通
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import screen from '../../Style/screen'

export default class LocationTraffic extends Component {

    render() {
        return (
            <View style={ styles.container }>
              <Image style={ { width: '100%', height: '50%' } } source={ require('../../image/map.png') } />
              <Text style={ { fontWeight: 'bold' } }>
                中山高( 國道1 號 ) 下員林交流道( 中心里程211 )
              </Text>
              <Text>
                往溪湖方向→員鹿路( 148 縣道 ) →直走接二溪路( 148 縣道 ) →過西環路後第一個紅綠燈右轉大公路99 號
                { '\n' }
              </Text>
              <Text style={ { fontWeight: 'bold' } }>
                公車( 由員林客運公司溪湖站下車後，步行約15 分鐘)
              </Text>
              <Text>
                員鹿路( 148 縣道 ) →直走接二溪路( 148 縣道 ) →過西環路後第一個紅綠燈右轉大公路99 號。
                { '\n' }
              </Text>
              <Text style={ { fontWeight: 'bold' } }>
                統聯客運( 由統聯客運公司溪湖站下車後，步行約5 分鐘)
              </Text>
              <Text>
                二溪路右轉大公路99 號
                { '\n' }
              </Text>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});
