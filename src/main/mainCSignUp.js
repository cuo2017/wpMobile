import React, { Component } from 'react';
import { Button,ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import {  List, InputItem, WhiteSpace } from 'antd-mobile';

import {StackNavigator,TabNavigator} from 'react-navigation';

import {SignHeader} from './mainCSign.js';

class SignUpBody extends Component {
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
					marginBottom:50,
					fontSize:20,
				}}
          		placeholder="请输入用户名"
				underlineColorAndroid="transparent"
				keyboardType="default"
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

				



				<View>
					<Button
						onPress={ () =>
				          navigate('User')
				        }
					  title="注册"
					  color="#417505"
					  accessibilityLabel="Learn more about this purple button"
					/>
				</View>
				<View style={{
					flexDirection: 'row',
			        justifyContent: 'flex-end',
			        alignItems: 'center',
				}}>
					<Text style={{
						color:'#417505',
						marginTop:20,
						fontSize:15
					}}>
						已有账户？
						<Text 
						onPress={()=> navigate('Sign')} 
						style={{
							color:'#fff',
						}}>
							立即登录
						</Text>
						
					</Text>
				</View>
			</View>
		);
	}	
}

export class SignUp extends Component{
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
		          <SignUpBody navigation={this.props.navigation}/>
		        </ImageBackground>
		    </View>
		);
	}
}


