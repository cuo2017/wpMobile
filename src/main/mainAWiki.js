import React, { Component } from 'react';
import { Animated,ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import { List, InputItem, WhiteSpace ,Button } from 'antd-mobile';

import {MainAContentHeader} from './mainAContentHeader.js';

export default class MainAWiki extends Component {
	constructor(props){
		super(props);
		this.state={
			// img:'',
			title:'',
			kind:'',
			num:'',
		}
		this.componentDidMount = ()=>{
			fetch('http://cuostudio.com/getMsg')
			.then((response) => response.json())
			.then((responseJson) => {
			let a = responseJson[1];
			this.setState({
				title:a.title,
				kind:a.type,
				num:a.num,
			});
			}).catch((error) => {
			console.error(error);
			});
		}
	}
	render(){
		return(
			<View>
				<MainAContentHeader value='解决措施'/>
				<View 
				style={{
		            borderBottomWidth:.25,
		            borderBottomColor:'#ccc',
		            backgroundColor:'#fff',
		            width:'100%',
		            flexDirection: 'row',
		            justifyContent: 'space-between',
		            alignItems: 'center',
		            paddingTop:10,
		            paddingBottom:10,
		          }}> 
		          	<WhiteSpace size="md" />
		            <Image 
		            source={{uri:'http://oss.huangye88.net/live/import/news/zzp2c4c77ce.jpg'}}
		            style={{
		              width:100,
		              height:60,
		              borderWidth:1,
		              borderColor:'#ccc',
		            }}
		            />
		            
		            <View>
			            <Text style={{
		                fontSize:24,
		                fontWeight:'bold',
		                color:'#333'
		              	}}>{this.state.title}
		              	</Text>
		              	<View style={{
		              		flexDirection: 'row',
		              		justifyContent: 'space-between',
		              		paddingLeft:10,
		              		paddingRight:10,
		              	}}>
			              	<View style={{
			              		backgroundColor:'#393',
			              		padding:2,
			              		borderRadius:2,
			              		width:44,
			              	}}>
				              	<Text style={{
				              		color:'#fff',
				              		fontSize:10,
				              		fontWeight:'normal',
				              	}}>{this.state.kind}</Text>
			              	</View>
			              	<Text style={{ marginTop:2,fontSize:12,}}>{'#' + this.state.num}</Text>
		              	</View>
	              	</View>
	              	<WhiteSpace size="md" />
		          </View>

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
	          </View>
		);
	}
}


