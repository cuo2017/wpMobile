import React, { Component } from 'react';
import { StatusBar,Animated,ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import { List, InputItem, WhiteSpace ,Button } from 'antd-mobile';

import {StackNavigator,TabNavigator} from 'react-navigation';

import MainAChart from './mainAChart.js';
import MainAData from './mainAData.js';
import MainADisaster from './mainADisaster.js';
import MainAWiki from './mainAWiki.js';





class MainABodyHeader extends Component {
	constructor(props){
	    super(props);
	    this.state={
	    	city:'',
	    	type:'',
	    	date:'',
	    	dtype:'',
	    };
	    this.componentDidMount = () => {
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

			this.setState({
				city:this.props.city
			});
	    }
	}


	render(){
		return(
			<View style={{
	          flex:1,
	          width:'100%',
	          height:300,
	          flexDirection: 'column',
	          justifyContent: 'center',
	          alignItems: 'center',
	        }}> 
	          <View style={{
	            width:'100%',
	            flex:1,
	            flexDirection: 'row',
	            justifyContent: 'flex-start',
	            alignItems: 'flex-end',
	            paddingLeft:10,
	            paddingRight:10,
	          }}>
	            <View style={{
	              flex:1,
	              flexDirection: 'row',
	              justifyContent: 'flex-start',
	              alignItems: 'flex-end',
	            }}>
	              <Text style={{
	              color:'#fff',
	              fontSize:40,
	              textShadowOffset:{width:.5, height:.5},
	              textShadowColor:'#333',
		            }}>{ this.props.city}</Text>
		            <Text style={{
		              color:'#fff',
		              fontSize:18,
		              textShadowOffset:{width:.5, height:.5},
		              textShadowColor:'#333',
		            }}>{this.props.type}</Text>
	              
	            </View>
	            <View style={{
	              flex:1,
	              flexDirection: 'row',
	              justifyContent: 'flex-end',
	              alignItems: 'flex-end',
	            }}>
            		<Text style={{
	                color:'#fff',
	                fontSize:18,
	                textShadowOffset:{width:.5, height:.5},
	              	textShadowColor:'#333',
	              }}>{this.props.date}</Text>
	              <Text style={{
	                color:'#fff',
	                fontSize:18,
	                textShadowOffset:{width:.5, height:.5},
	              	textShadowColor:'#333',
	              }}>{ '  ' + this.state.dtype + '预警'}</Text>
	            </View>
	          </View>
	        </View>

		);
	}
}


// =======MainABodyCONTENT COMPONENT ===========


class MainABodyContent extends Component {
	constructor(props){
	    super(props);
	    // this.state={
	    //   weaData:this.props.data,
	    //   disasterData:this.props.value,
	    // };
    }
    render(){

    	return(
    		<View
    		style={{
	        	flex:6,
	        	width:'100%',
	        }}>
		        <ScrollView 
		        showsVerticalScrollIndicator={false}
		        horizontal={false} 
				style={{
		        	width:'100%',
		        }}>
		        	<MainADisaster />
		        	<MainAWiki />
		        	<MainAData data={this.props.data}/>
		            <MainAChart />
		        </ScrollView>
	        </View>
		);
    }
}







export class MainABody extends Component {
  constructor(props){
    super(props);
  }



  render(){
  	console.disableYellowBox = true;

    return (
      <View style={{
        flex:1,
        height:'100%',
        // padding:10,
        paddingBottom:0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      	<StatusBar  
         animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
         hidden={false}  //是否隐藏状态栏。  
         backgroundColor={'transparent'} //状态栏的背景色  
         translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
         barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
        >  
        </StatusBar>  
        <MainABodyHeader city={this.props.data.city} type={this.props.data.type} date={this.props.data.date}/>
        <MainABodyContent data={this.props.data}/>
      </View>
    );
  }
}