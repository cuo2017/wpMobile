import React, { Component } from 'react';
import { FlatList,ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import {  List, InputItem, WhiteSpace ,Button } from 'antd-mobile';

import {StackNavigator,TabNavigator} from 'react-navigation';


export default class MsgList extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={{
            marginTop:10,
            width:'100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding:10,
          }}>
        <FlatList
        horizontal={true} 
        data={[{key: ''}, {key: ''}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }

}
