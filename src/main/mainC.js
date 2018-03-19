import React, { Component } from 'react';
import { Button, ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import {  List, InputItem, WhiteSpace } from 'antd-mobile';

import {StackNavigator,TabNavigator} from 'react-navigation';

import {Sign} from './mainCSign.js';
import {SignUp} from './mainCSignUp.js';

class UserBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[]
    }
    this.componentDidMount = () => {
      // fetch('http://cuostudio.com/getUser')
      // .then((response) => (response.json()) )
      // .then( (responseJson) => {
      //   let user = responseJson[2];
      //   this.setState({data:user});
      // });
      this.setState({data:this.props.data});
    }
  }
  logout(){
    const { navigate } = this.props.navigation;
    navigate('Sign');
  }
  render(){
    return(
      <View style={{
        padding:10,
        width:'100%',
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <View style={{
          padding:10,
          width:'100%',
          flex:3,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth:1,
          borderBottomColor:'#fff',
        }}
        >
          <Image source={require('../../dist/images/user.png')}/>
        </View>

        <View style={{
          padding:10,
          width:'100%',
          flex:3,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth:1,
          borderBottomColor:'#fff',
        }}
        >
          <Text style={{
            color:'#fff',
            fontSize:20,
            fontWeight:'bold',
          }}>
          【基本资料】{'\n'}
          </Text> 
          <Text style={{
            color:'#fff',
            fontSize:15,
          }}>
          登录用户名： {this.state.data.name}
          </Text> 
          <Text style={{
            color:'#fff',
            fontSize:15,
          }}>
          行政区域位置： {this.state.data.location}
          </Text> 
          <Text style={{
            color:'#fff',
            fontSize:15,
          }}>
          拥有藤椒： {this.state.data.pepperNumber}
          </Text> 
        </View>

        <View style={{
          padding:10,
          width:'100%',
          flex:4,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth:1,
          borderBottomColor:'#fff',
        }}
        >
          <Text style={{
            color:'#fff',
            fontSize:20,
            fontWeight:'bold',
          }}>
          【安全设置】{'\n'}
          </Text> 
          <View style={{
            padding:10,
            width:'100%',
            flex:4,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
            color:'#fff',
            fontSize:12,
            width:'50%',
            padding:10,
            }}>
              密码绑定{'\n'}安全性高的密码可以使帐号更安全。建议您定期更换密码，设置一个包含字母，符号或数字中至少两项且长度超过6位的密码。
            </Text>

            <Text style={{
            color:'#fff',
            fontSize:12,
            width:'50%',
            padding:10,
            }}>
              手机绑定{'\n'}您已经注册并绑定了手机号{'\n'}
              <Text style={{
              color:'#fff',
              fontSize:18,
              fontWeight:'bold',
              }}>
                {this.state.data.phone}
              </Text>
              {'\n'}[您可以使用手机号来登录以及找回密码]
            </Text>
          </View>
        </View>

        <View style={{
          padding:10,
          width:'100%',
          flex:2,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth:1,
          borderBottomColor:'#fff',
        }}
        >
          <Text style={{
            color:'#fff',
            fontSize:20,
            fontWeight:'bold',
          }}>
          【用户权限】{'\n'}
          </Text>
          <Text style={{
            color:'#fff',
            fontSize:15,
            padding:10,
            }}>
             您的权限为：{this.state.data.auth}
             </Text>
        </View>

        <View style={{
          padding:10,
          width:'100%',
        }}
        >
        <Button title='退出登录' color='#f96' onPress={this.logout.bind(this)}></Button>
        </View>

      </View>
    );
  }
}

class User extends Component {

  
  render(){

    return(
      <View>
        <ImageBackground source={require('../../dist/images/bg13.jpeg')} style={{
          width:'100%',
          height:'100%',
        }}>
          <UserBody data={'asd'} navigation={this.props.navigation} />
        </ImageBackground>
      </View>

      );
  }
}



export const MainCBody = StackNavigator({

  Sign:{
    screen: Sign,
    navigationOptions:{
      header:null,
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions:{
      header:null,
    }
  },
  User: {
    screen : User,
    navigationOptions:{
      header:null,
    }
  },

  
  

});




