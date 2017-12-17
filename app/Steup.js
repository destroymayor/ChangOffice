import React, { Component } from "react";
import { View } from "react-native";
import { StackNavigator, NavigationActions, getStateForAction } from "react-navigation";

import BarClose from "./utils/BarClose";
import WebPage from "./utils/WebViewPage";

import index from "./index";
import page from "./page/PageExports";

const Steup = StackNavigator(
  {
    index: {
      screen: index,
      navigationOptions: { header: null }
    },
    //本所簡介
    Introduction: {
      screen: page.Introduction,
      navigationOptions: { title: "本所簡介" }
    },
    //本所轄區
    QurArea: {
      screen: page.QurArea,
      navigationOptions: { title: "本所資訊" }
    },
    //位置交通
    LocationTraffic: {
      screen: page.LocationTraffic,
      navigationOptions: { title: "位置交通" }
    },
    //辦公時間
    OfficeHours: {
      screen: page.OfficeHours,
      navigationOptions: { title: "辦公時間" }
    },
    //各課業務
    EachClassBusiness: {
      screen: page.EachClassBusiness,
      navigationOptions: { title: "各課業務" }
    },
    //樓層介紹
    FloorPresentation: {
      screen: page.FloorPresentation,
      navigationOptions: { title: "樓層介紹" }
    },
    //FB粉絲專頁及Youtube影音頻道
    FBandYoutube: {
      screen: page.FBandYoutube,
      navigationOptions: { title: "FB粉絲專頁及Youtube影音頻道" }
    },
    latestNews: {
      screen: page.latestNews,
      navigationOptions: { title: "最新消息" }
    },
    //--------------------------------------//
    //公告專區
    Proclamation: {
      screen: page.Proclamation,
      navigationOptions: { title: "公告專區" }
    },
    //書狀補給
    BooklikeSupply: {
      screen: page.BooklikeSupply,
      navigationOptions: { title: "書狀補給" }
    },
    //建物第一次登記
    ConstructionFirstRegistration: {
      screen: page.ConstructionFirstRegistration,
      navigationOptions: { title: "建物第一次登記" }
    },
    //未辦繼承
    NotInherited: {
      screen: page.NotInherited,
      navigationOptions: { title: "未辦繼承" }
    },
    //地籍清理等公告
    CadastralCleaning: {
      screen: page.CadastralCleaning,
      navigationOptions: { title: "地籍清理" }
    },
    //--------------------------------------//
    //查詢專區
    QueryArea: {
      screen: page.QueryArea,
      navigationOptions: { title: "查詢專區" }
    },
    CaseHandlingImagePage: {
      screen: page.CaseHandlingImagePage,
      navigationOptions: { title: "案件辦理情形" }
    },
    LandCharges: {
      screen: page.LandCharges,
      navigationOptions: { title: "地政規費收費標準" }
    },
    LandChargesPage: {
      screen: page.LandChargesPage
    },
    //--------------------------------------//
    //下載專區
    Downloads: {
      screen: page.Downloads,
      navigationOptions: { title: "下載專區" }
    },
    ApplicationNote: {
      screen: page.ApplicationNote,
      navigationOptions: { title: "申請須知及書表" }
    },
    //--------------------------------------//
    //試算專區
    TrialCalculation: {
      screen: page.TrialCalculation,
      navigationOptions: { title: "試算專區" }
    },
    //--------------------------------------//
    //線上申辦
    OnlineApplication: {
      screen: page.OnlineApplication,
      navigationOptions: { title: "線上申辦" }
    },
    //--------------------------------------//
    //檔案應用
    FileApplication: {
      screen: page.FileApplication,
      navigationOptions: { title: "檔案應用" }
    },
    Applicationandexample: {
      screen: page.Applicationandexample,
      navigationOptions: { title: "申請書及範例" }
    },
    ArchivesApplicationNotes: {
      screen: page.ArchivesApplicationNotes,
      navigationOptions: { title: "檔案應用閱覽須知" }
    },
    Charges: {
      screen: page.Charges,
      navigationOptions: { title: "收費標準" }
    },
    JobflowChart: {
      screen: page.JobflowChart,
      navigationOptions: { title: "作業流程圖" }
    },
    //--------------------------------------//
    //實價登錄
    PricingLogin: {
      screen: page.PricingLogin,
      navigationOptions: { title: "實價登錄" }
    },
    DeclarationBook: {
      screen: page.DeclarationBook,
      navigationOptions: { title: "書表下載" }
    },
    //--------------------------------------//
    //相關連結
    Relatedlink: {
      screen: page.Relatedlink,
      navigationOptions: { title: "相關連結" }
    },
    RelatedlinkArea: {
      screen: page.RelatedlinkArea,
      navigationOptions: { title: "轄區內公所" }
    },
    RelatedlinkChanghua: {
      screen: page.RelatedlinkChanghua,
      navigationOptions: { title: "彰化縣各地政事務所" }
    },
    RelatedlinkGovernment: {
      screen: page.RelatedlinkGovernment,
      navigationOptions: { title: "彰化縣政府" }
    },
    RelatedlinkAreaInsiders: {
      screen: page.RelatedlinkAreaInsiders,
      navigationOptions: { title: "轄區內戶政事務所" }
    },
    WebPage: { screen: WebPage }
  },
  {
    navigationOptions: { headerTintColor: "#2894ff" }
  }
);

const navigateOnce = getStateForAction => (action, state) => {
  const { type, routeName } = action;
  return state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
    ? null
    : getStateForAction(action, state);
};

Steup.router.getStateForAction = navigateOnce(Steup.router.getStateForAction);

export default Steup;
