import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from "react-navigation"

import index from './index'
import page from './page/PageExports'

const Steup = StackNavigator({
    index: {
        screen: index,
        navigationOptions: {
            header: null
        }
    },
    Introduction: {
        screen: page.Introduction,
        navigationOptions: {
            title: "本所簡介",
            headerTintColor: '#2894ff'
        }
    },
    Proclamation: {
        screen: page.Proclamation,
        navigationOptions: {
            title: "公告專區",
            headerTintColor: '#2894ff'
        }
    },
    QueryArea: {
        screen: page.QueryArea,
        navigationOptions: {
            title: "查詢專區",
            headerTintColor: '#2894ff'
        }
    },
    Downloads: {
        screen: page.Downloads,
        navigationOptions: {
            title: "下載專區",
            headerTintColor: '#2894ff'
        }
    },
    TrialCalculation: {
        screen: page.TrialCalculation,
        navigationOptions: {
            title: "試算專區",
            headerTintColor: '#2894ff'
        }
    },
    OnlineApplication: {
        screen: page.OnlineApplication,
        navigationOptions: {
            title: "線上申辦",
            headerTintColor: '#2894ff'
        }
    },
    FileApplication: {
        screen: page.FileApplication,
        navigationOptions: {
            title: "檔案應用",
            headerTintColor: '#2894ff'
        }
    },
    PricingLogin: {
        screen: page.PricingLogin,
        navigationOptions: {
            title: "實價登錄",
            headerTintColor: '#2894ff'
        }
    },
    Relatedlink: {
        screen: page.Relatedlink,
        navigationOptions: {
            title: "相關連結",
            headerTintColor: '#2894ff'
        }
    }
});

export default Steup