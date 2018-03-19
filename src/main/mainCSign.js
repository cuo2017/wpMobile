import React, { Component } from 'react';
import { Button,ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import {  List, InputItem, WhiteSpace } from 'antd-mobile';

import {StackNavigator,TabNavigator} from 'react-navigation';

export class SignHeader extends Component {
	render(){
		return(
			<View style={{
				flex:1,
				borderBottomWidth:.25,
				borderBottomColor:'#fff',
				flexDirection: 'column',
		        justifyContent: 'flex-end',
		        alignItems: 'flex-start',
			}}>
				<View style={{
					flexDirection: 'row',
			        justifyContent: 'flex-start',
			        alignItems: 'flex-end',
			        paddingLeft:10,
			        paddingBottom:10,
				}}>
					<Image style={{
						width:40,
						height:40,
					}} source={require('../../dist/images/logo6.png')} />
					<Text style={{
						marginLeft:10,
						fontSize:30,
						color:'#fff',
					}}>智慧藤椒</Text>
				</View>
			</View>
		);
	}	
}

class SignBody extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const { navigate } = this.props.navigation;
		return(
			<View style={{
				flex:3,
				padding:40,
			}}>
				<TextInput
				style={{
					height: 50,
					color:'#fff',
					borderBottomColor:'#fff',
					borderBottomWidth:1,
					marginBottom:20,
					fontSize:20,
				}}
          		placeholder="请输入手机号"
				underlineColorAndroid="transparent"
				keyboardType="phone-pad"
				placeholderTextColor='#fff'
          		>
				</TextInput>

				<TextInput
				style={{
					height: 50,
					color:'#fff',
					borderBottomColor:'#fff',
					borderBottomWidth:1,
					marginBottom:50,
					fontSize:20,
				}}
          		placeholder="请输入密码"
				underlineColorAndroid="transparent"
				keyboardType="default"
				placeholderTextColor='#fff'
				secureTextEntry={true}
          		>
				</TextInput>

				<View>
					<Button
						onPress={ () =>
				          navigate('User')
				        }
					  title="登录"
					  color="#509EF9"
					  accessibilityLabel="Learn more about this purple button"
					/>
				</View>

				<View style={{
					flexDirection: 'row',
			        justifyContent: 'flex-end',
			        alignItems: 'center',
				}}>
					<Text style={{
						color:'#509EF9',
						marginTop:20,
						fontSize:15
					}}>
						还没有账户？
						<Text 
						onPress={()=> navigate('SignUp')} 
						style={{
							color:'#fff',
						}}>
							立即创建
						</Text>
						
					</Text>
				</View>
			</View>
		);
	}	
}

export class Sign extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<View style={{
				flexDirection: 'column',
		        justifyContent: 'flex-start',
		        alignItems: 'center',
			}}>
		        <ImageBackground source={require('../../dist/images/bg1.jpg')} style={{
		          width:'100%',
		          height:'100%',
		        }}>
		          <SignHeader  />
		          <SignBody navigation={this.props.navigation}/>
		        </ImageBackground>
		    </View>
		);
	}
}


