import React, { Component } from 'react';
import { ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import {  List, InputItem, WhiteSpace ,Button } from 'antd-mobile';

import {StackNavigator,TabNavigator} from 'react-navigation';

import MsgList from './mainBList.js';
class MainBBodyHeader extends Component {
  constructor(props){
    super(props);
    this.state={
      weaData:{
        city:'三台',
        data:{
          type:'局部多云',
          forecast:[{
            date:'星期三'
          }]
        }
      },
      disasterData:{
        type:'轻微锈病预警',
        degree:'50%',
      },

    }
  }

  render(){
    return(
      <View style={{
          flex:1,
          borderBottomWidth:.25,
          borderBottomColor:'#fff',
          width:'100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding:10,
        }}> 
          <Text style={{
            color:'#fff',
            fontSize:35,
            
          }}>{'<'}</Text>
          <Text style={{
            color:'#fff',
            fontSize:15,
            textShadowOffset:{width:.5, height:.5},
            textShadowColor:'#333',
          }}>{this.props.type + '  '}
          <Text style={{
            color:'#fff',
            fontSize:25,
            textShadowOffset:{width:.5, height:.5},
            textShadowColor:'#333',
          }}>{this.props.title}</Text>
          </Text>
        </View>
      );
  }
}




export class MainBBody extends Component {

  constructor(props){
    super(props);
    this.state={
      title:'',
      date:'',
      type:'',
      content:'',
    };

    this.componentDidMount = () =>{
      fetch('http://cuostudio.com/getMsg')
      .then((response) => response.json())
      .then((responseJson) => {
        let a = responseJson[1];
        this.setState({
          title: a.title,
          type:a.type,
          content:a.content,
        });
      });

    }
  }
  render(){
    console.disableYellowBox = true;
    return (
      <View style={{
        flex:1,
        height:'150%',
        paddingBottom:0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>


        <MainBBodyHeader title={this.state.title} type={this.state.type}/>
        

        <View style={{
          flex:6,
          borderBottomWidth:.25,
          borderBottomColor:'#fff',
          width:'100%',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}> 
          <ScrollView style={{
            padding:10,
            width:'100%'
          }}>
          <Image 
          source={{uri:'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7d5325cb99504fc2b652b85784b48c74/d01373f082025aaff672d708f9edab64024f1ab4.jpg'}}
          style={{
            width:'100%',
            height:150,
          }}
          />
          <Text style={{
              marginTop:10,
              width:'100%',
              color:'#fff',
              fontSize:20,
              paddingBottom:20,
            }}>
            {this.state.content}
             </Text>

          </ScrollView>
          
        </View>
      </View>
    );
  }
}
