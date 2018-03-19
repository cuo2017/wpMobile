// import data from './fetch.js';

import React, { Component } from 'react';
import { ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import {  List, InputItem, WhiteSpace ,Button } from 'antd-mobile';

import {StackNavigator,TabNavigator} from 'react-navigation';

import {TabView} from 'teaset';

import Icon from 'react-native-vector-icons/FontAwesome';


import {MainABody} from './mainA.js';
import {MainBBody} from './mainB.js';
import {MainCBody} from './mainC.js';
import {MainDBody} from './mainD.js';
import {MainEBody} from './mainE.js';

// ==========chart============





// const MainBody = TabNavigator(
//   {

//     D:{
//       screen:MainDBody,
//       navigationOptions:{
//         title:'.',
//         showIcon:'true'
//       },
//     },
//     E:{
//       screen:MainEBody,
//       navigationOptions:{
//         title:'.',
//         showIcon:'true'
//       },
//     },
//     A:{
//       screen:MainABody,
//       navigationOptions:{
//         title:'.',
//         showIcon:'true'

//       },
//     },
//     C:{
//       screen:MainCBody,
//       navigationOptions:{
//         title:'.',
//         showIcon:'true'
//       },
//     },
//     B:{
//       screen:MainBBody,
//       navigationOptions:{
//         title:'.',
//         showIcon:'true'
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       pressOpacity: 0.8,
//       activeTintColor: '#fff',
//       inactiveTintColor: '#ccc',
//       showIcon: false,
//       showLabel: true,
//       upperCaseLabel: true,
//       style: {
//         height:30,
//         backgroundColor: 'transparent',
//         paddingLeft:"35%",
//         paddingRight:"35%",
//         paddingTop:0,
//         // margin:'auto',
//       },
//       labelStyle:{
//         marginTop:-40,
//         fontSize:50,
//       },
//       indicatorStyle: { height: 0 },
      
//     },
//     tabBarPosition:'bottom',
//     lazy: true,
//   }
// );


class MainBody extends Component {
  constructor(props){
    super(props);

    this.state={
      city:'',
      type:'',
      date:'',
      high:'',
      low:'',
      fx:'',
      fl:'',
      sd:'',
      notice:'',
      forecast11:'',
      forecast12:'',
      forecast21:'',
      forecast22:'',
      forecast31:'',
      forecast32:'',
      forecast41:'',
      forecast42:'',
    };

    this.componentDidMount=()=>{
      fetch('http://cuostudio.com/getWeaByWeb')
    .then((response) => response.json())
    .then((responseJson) => {
      let data = JSON.parse(responseJson);
      this.setState({
        city:data.city,
        type:data.data.forecast[0].type,
        date:data.data.forecast[0].date,
        high:data.data.forecast[0].high,
        low:data.data.forecast[0].low,
        fx:data.data.forecast[0].fx,
        fl:data.data.forecast[0].fl,
        sd:data.data.shidu,
        notice:data.data.forecast[0].notice,
        forecast11:data.data.forecast[1].high,
        forecast12:data.data.forecast[1].low,
        forecast21:data.data.forecast[2].high,
        forecast22:data.data.forecast[2].low,
        forecast31:data.data.forecast[3].high,
        forecast32:data.data.forecast[3].low,
        forecast41:data.data.forecast[4].high,
        forecast42:data.data.forecast[4].low,
      });
    }).catch((error) => {
    console.error(error);
    });

    fetch('http://cuostudio.com/getDataBySys1')
    .then((response) => response.json())
    .then((responseJson) => {
      let data = responseJson;
      this.setState({
        dtype:data.type,
      });
    }).catch((error) => {
    console.error(error);
    });

    }

  }
  render(){
    const homeIcon = (<Icon name="home" size={25} color="#ccc" />)
    const homeIconActive = (<Icon name="home" size={25} color="#337ab7" />)
    const wikiIcon = (<Icon name="cloud" size={25} color="#ccc" />)
    const wikiIconActive = (<Icon name="cloud" size={25} color="#337ab7" />)
    const chartIcon = (<Icon name="bar-chart-o" size={25} color="#ccc" />)
    const chartIconActive = (<Icon name="bar-chart-o" size={25} color="#337ab7" />)
    const userIcon = (<Icon name="user" size={25} color="#ccc" />)
    const userIconActive = (<Icon name="user" size={25} color="#337ab7" />)
    return(
    <TabView style={{flex: 1}} type='projector'>
      
      <TabView.Sheet
        title='首页'
        icon={homeIcon}
        activeIcon={homeIconActive}
      >
        <MainABody data={this.state}/>
      </TabView.Sheet>
      <TabView.Sheet
        title='措施'
        icon={wikiIcon}
        activeIcon={wikiIconActive}
      >
        <MainDBody />
      </TabView.Sheet>
      <TabView.Sheet
        title='图表'
        icon={chartIcon}
        activeIcon={chartIconActive}
      >
        <MainEBody data={this.state}/>
      </TabView.Sheet>
      <TabView.Sheet
        title='用户'
        icon={userIcon}
        activeIcon={userIconActive}
      >
        <MainCBody />
      </TabView.Sheet>
    </TabView>
    );
  }
}


{/*data={this.props.navigation.state.params.data} */}
export class Main extends Component {
  navigationOptions = {
    title: 'Welcome',
  };
  render(){

    const { navigate } = this.props.navigation;

    return(
      <View>
        <ImageBackground source={require('../../dist/images/bg15.png')} style={{
          width:'100%',
          height:'100%',
        }}>
          {/*<MainHeader 
          
          navigation={this.props.navigation} 
          />*/}
          {/*<ScrollView>*/}
          <MainBody />
          {/*<Chart />*/}
        </ImageBackground>
      </View>

      );
  }
}

