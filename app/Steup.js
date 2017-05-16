import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from "react-navigation"

import BarClose from './utils/BarClose'
import WebPage from './utils/WebViewPage'

import index from './index'
import page from './page/PageExports'

const Steup = StackNavigator({
    index: {
        screen: index,
        navigationOptions: {
            header: null
        }
    },
    //本所簡介
    Introduction: {
        screen: page.Introduction,
        navigationOptions: {
            title: "本所簡介",
            headerTintColor: '#2894ff'
        }
    },
    //本所轄區
    QurArea: {
        screen: page.QurArea,
        navigationOptions: ({navigation}) => {
            return {
                title: "本所轄區",
                headerTintColor: '#2894ff',
                headerLeft: <BarClose onPress={ () => {
                        navigation.goBack();
                    } } />,
            }
        }
    },
    //位置交通
    LocationTraffic: {
        screen: page.LocationTraffic,
        navigationOptions: ({navigation}) => {
            return {
                title: "位置交通",
                headerTintColor: '#2894ff',
                headerLeft: <BarClose onPress={ () => {
                        navigation.goBack();
                    } } />,
            }
        }
    },
    //辦公時間
    OfficeHours: {
        screen: page.OfficeHours,
        navigationOptions: ({navigation}) => {
            return {
                title: "辦公時間",
                headerTintColor: '#2894ff',
                headerLeft: <BarClose onPress={ () => {
                        navigation.goBack();
                    } } />,
            }
        }
    },
    //各課業務
    EachClassBusiness: {
        screen: page.EachClassBusiness,
        navigationOptions: ({navigation}) => {
            return {
                title: "各課業務",
                headerTintColor: '#2894ff',
                headerLeft: <BarClose onPress={ () => {
                        navigation.goBack();
                    } } />,
            }
        }
    },
    //樓層介紹
    FloorPresentation: {
        screen: page.FloorPresentation,
        navigationOptions: ({navigation}) => {
            return {
                title: "樓層介紹",
                headerTintColor: '#2894ff',
                headerLeft: <BarClose onPress={ () => {
                        navigation.goBack();
                    } } />,
            }
        }
    },
    //FB粉絲專頁及Youtube影音頻道
    FBandYoutube: {
        screen: page.FBandYoutube,
        navigationOptions: ({navigation}) => {
            return {
                title: "FB粉絲專頁及Youtube影音頻道",
                headerTintColor: '#2894ff',
                headerLeft: <BarClose onPress={ () => {
                        navigation.goBack();
                    } } />,
            }
        }
    },
    //--------------------------------------//
    //公告專區
    Proclamation: {
        screen: page.Proclamation,
        navigationOptions: {
            title: "公告專區",
            headerTintColor: '#2894ff'
        }
    },
    //書狀補給
    BooklikeSupply: {
        screen: page.BooklikeSupply,
        navigationOptions: ({navigation}) => {
            return {
                title: "書狀補給",
                headerTintColor: '#2894ff',
                headerLeft: <BarClose onPress={ () => {
                        navigation.goBack();
                    } } />,
            }
        }
    },
    //土地第一次登記
    LandFirstRegistration: {
        screen: page.LandFirstRegistration,
        navigationOptions: ({navigation}) => {
            return {
                title: "土地第一次登記",
                headerTintColor: '#2894ff',
                headerLeft: <BarClose onPress={ () => {
                        navigation.goBack();
                    } } />,
            }
        }
    },
    //建物第一次登記
    ConstructionFirstRegistration: {
        screen: page.ConstructionFirstRegistration,
        navigationOptions: ({navigation}) => {
            return {
                title: "建物第一次登記",
                headerTintColor: '#2894ff',
                headerLeft: <BarClose onPress={ () => {
                        navigation.goBack();
                    } } />,
            }
        }
    },
    //未辦繼承
    NotInherited: {
        screen: page.NotInherited,
        navigationOptions: ({navigation}) => {
            return {
                title: "未辦繼承",
                headerTintColor: '#2894ff',
                headerLeft: <BarClose onPress={ () => {
                        navigation.goBack();
                    } } />,
            }
        }
    },
    //地籍清理等公告
    CadastralCleaning: {
        screen: page.CadastralCleaning,
        navigationOptions: ({navigation}) => {
            return {
                title: "地籍清理等公告",
                headerTintColor: '#2894ff',
                headerLeft: <BarClose onPress={ () => {
                        navigation.goBack();
                    } } />,
            }
        }
    },
    //--------------------------------------//
    //查詢專區
    QueryArea: {
        screen: page.QueryArea,
        navigationOptions: {
            title: "查詢專區",
            headerTintColor: '#2894ff'
        }
    },
    //--------------------------------------//
    //下載專區
    Downloads: {
        screen: page.Downloads,
        navigationOptions: {
            title: "下載專區",
            headerTintColor: '#2894ff'
        }
    },
    //--------------------------------------//
    //試算專區
    TrialCalculation: {
        screen: page.TrialCalculation,
        navigationOptions: {
            title: "試算專區",
            headerTintColor: '#2894ff'
        }
    },
    //--------------------------------------//
    //線上申辦
    OnlineApplication: {
        screen: page.OnlineApplication,
        navigationOptions: {
            title: "線上申辦",
            headerTintColor: '#2894ff'
        }
    },
    //--------------------------------------//
    //檔案應用
    FileApplication: {
        screen: page.FileApplication,
        navigationOptions: {
            title: "檔案應用",
            headerTintColor: '#2894ff'
        }
    },
    //--------------------------------------//
    //實價登錄
    PricingLogin: {
        screen: page.PricingLogin,
        navigationOptions: {
            title: "實價登錄",
            headerTintColor: '#2894ff'
        }
    },
    //--------------------------------------//
    //相關連結
    Relatedlink: {
        screen: page.Relatedlink,
        navigationOptions: {
            title: "相關連結",
            headerTintColor: '#2894ff'
        }
    },
    WebPage: {
        screen: WebPage
    }
});

export default Steup