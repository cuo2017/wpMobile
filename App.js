import React, { Component } from 'react';
import { ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import {  List, InputItem, WhiteSpace ,Button } from 'antd-mobile';

import {StackNavigator,TabNavigator} from 'react-navigation';

// import { createStore,combineReducers } from "redux";

// import { createForm } from 'rc-form';

import { Main } from './src/main/main.js'



// ========= render ============


const App = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions:{
      header:null,
    }
  },
});

export default App;



// ==============打包apk===========
/**
keytool -genkey -v -keystore my-release-key.keystore -alias cyhwill -keyalg RSA -keysize 2048 -validity 10000




**/