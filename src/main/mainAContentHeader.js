import React, { Component } from 'react';
import { Animated,ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import { List, InputItem, WhiteSpace ,Button } from 'antd-mobile';

export class MainAContentHeader extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<View style={{
				borderBottomWidth:.25,
	            borderBottomColor:'#ccc',
	            backgroundColor:'#fff',
	            width:'100%',
	            flexDirection: 'row',
	            justifyContent: 'flex-start',
	            alignItems: 'center',
	            padding:10,
			}}>	
				<Text style={{
					borderLeftColor:'darkgreen',
					borderLeftWidth:4,
					paddingLeft:20,
					fontSize:15,
					fontWeight:'bold',
					color:'#333',
				}}>{this.props.value}</Text>
			</View>
		);
	}
}

/**
export class MainAContentFooter extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<View>
				<View style={{
	          	backgroundColor:'#fff',
	          	flexDirection: 'row',
	            justifyContent: 'center',
	            alignItems: 'center',
	            padding:10,
	          }}>
	          	<Text style={{
	          		fontSize:15,
	          		color:'#666',
	          	}}>查看更多内容</Text>
	          </View>

	          <View style={{
	          	height:10,
	          }}>
	          </View>
			<View>
		);
	}
}
**/
