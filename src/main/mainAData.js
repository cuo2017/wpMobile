import React, { Component } from 'react';
import { FlatList, Animated,ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import { List, InputItem, WhiteSpace ,Button } from 'antd-mobile';

import { MainAContentHeader, MainAContentFooter } from './mainAContentHeader.js';

const styles = StyleSheet.create({
  text:{
  	color:'#333',
  	fontSize:20,
  },
  label:{
  	color:'#aaa',

  }
});

export class MainADataBodyListItem extends Component {
	constructor(props){
		super(props);
		
	}

	render(){
		return (
			<View style={{
				flexDirection: 'column',
	            justifyContent: 'center',
	            alignItems: 'center',
	            paddingLeft:20,
	            paddingRight:20,
			}}>
				<Text style={styles.label}>{this.props.value}</Text>
				<Text style={styles.text}>{this.props.text}</Text>
			</View>
		);
	}
}

class MainADataBody extends Component{
	constructor(props){
		super(props);

		this.state = {
			high:'',
			low:'',
			st:'10.0 °C',
			fx:'',
			fl:'',
			sd:'',
			notice:'',

		};
	}
	render(){
		return(
			<View>
				<View style={{
					flex:1,
		            width:'100%',
		            flexDirection: 'row',
		            justifyContent: 'space-between',
		            alignItems: 'center',
		            borderBottomWidth:.25,
		            borderBottomColor:'#ccc',
		            marginTop:20,
		            paddingBottom:20,
				}}>
					<FlatList

					  data={[
					  	{key: 'a',label:'最高温',text:this.props.data.high}, 
					  	{key: 'b',label:'最低温',text:this.props.data.low},
					  	{key: 'c',label:'土壤温度',text:this.state.st},
					  	{key: 'd',label:'风向',text:this.props.data.fx},
					  	{key: 'e',label:'风力',text:this.props.data.fl},
					  	{key: 'f',label:'湿度',text:this.props.data.sd},
					  	]}
					  renderItem={({item}) => <MainADataBodyListItem value={item.label} text={item.text}/>}
					  horizontal={true}
					  ItemSeparatorComponent={() => <Text style={{marginTop:10,marginBottom:10,width:1,backgroundColor:'#eee'}}></Text>}
						showsHorizontalScrollIndicator = {false}
					/>
					
				</View>
				<View style={{
	            	flex:1,
		            backgroundColor:'#fff',
		            width:'100%',
		            flexDirection: 'row',
		            justifyContent: 'center',
		            alignItems: 'center',
		            padding:10,
	          		}}> 
	          		<Text style={{
	          			fontSize:15,
	          			color:'#666'
	          		}}>
	          		今日天气：{this.props.data.notice}
	          		</Text>
		        </View>

	        </View>
		);
	}
}

export default class MainAData extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<View>
				<MainAContentHeader value='实时数据'/>
				<View style={{
	            	flex:3,
		           	borderBottomWidth:.25,
		            borderBottomColor:'#ccc',
		            backgroundColor:'#fff',
		            width:'100%',
		            flexDirection: 'column',
		            justifyContent: 'center',
		            alignItems: 'center',
	          		}}> 
	          		{/*<MainADataBody data1={'高温 27.0℃'} data2={'低温 12.0℃'}/>
	          		<MainADataBody data1={'土壤温度 23°C'} data2={'空气温度°C'}/>
	          		<MainADataBody data1={'无持续风向'} data2={'风力<3级'} />
	          		<MainADataBody data1={'湿度：60%'} data2={'发生概率：20%'} />*/}
		        	<MainADataBody data={this.props.data}/>
		        	
		        </View>

		          <View style={{
		          	height:10,
		          }}>
		          </View>
	        </View>
		);
	}
}
