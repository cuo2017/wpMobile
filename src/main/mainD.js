import React, { Component } from 'react';
import { FlatList ,ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import {  List, InputItem, WhiteSpace ,Button } from 'antd-mobile';

import {StackNavigator,TabNavigator} from 'react-navigation';

import {Label,SegmentedView,NavigationBar} from 'teaset';

class MainDBodyListItem extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<View style={{
				backgroundColor:'#fff',
				flex:1,
				flexDirection:'row',
				justifyContent:'flex-start',
				alignItems:'center',
				width:'100%',
				height:60,
				paddingLeft:5,
			}}>
				<Image 
	            source={{uri:'http://oss.huangye88.net/live/import/news/zzp2c4c77ce.jpg'}}
	            style={{
	              width:100,
	              height:50,
	              borderWidth:1,
	              borderColor:'#ccc',
	            }}
	            />
	            <Text style={{
	            	fontSize:20,
	            	width:'100%',
	            	marginLeft:5,
	            }}>{this.props.title}</Text>
			</View>
		);
	}
}

class MainDBodyHeader extends Component {
  constructor(props){
    super(props);
    this.state={
      data:''

    }

    this.componentDidMount = () => {
    	fetch('http://cuostudio.com/getMsg')
	      .then((response) => response.json())
	      .then((responseJson) => {
	        let a = responseJson;
	        this.setState({
	          data: a,
	        });
	      });
    }
  }

  render(){
    return(
    	<View style={{
    		flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
    	}}>
    		<NavigationBar 
		          title='解决措施' 
		          style={{height:70}}
		          />
	    	
	      <View style={{
	      	  paddingTop:70,
	          flex:1,
	          width:'100%',
	          flexDirection: 'row',
	          justifyContent: 'space-between',
	          alignItems: 'flex-end',
	        }}> 
	          
	          <SegmentedView style={{
	          	flex: 1,width:'100%'}} type='projector'>
				  <SegmentedView.Sheet title='锈病'>
				    <View style={{marginTop:10,flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				      <FlatList
						data={this.state.data}
						  renderItem={({item}) => <MainDBodyListItem img={item.img} title={item.title} />}
						  horizontal={false}
						  ItemSeparatorComponent={() => <Text style={{width:'100%',height:1,backgroundColor:'#eee'}}></Text>}
						  showsVerticalScrollIndicator = {false}>
						</FlatList>
				    </View>
				  </SegmentedView.Sheet>
				  <SegmentedView.Sheet title='干旱'>
				    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				      <Label type='detail' size='xl' text='Segment two' />
				    </View>
				  </SegmentedView.Sheet>
				  <SegmentedView.Sheet title='冻害'>
				    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				      <Label type='detail' size='xl' text='Segment three' />
				    </View>
				  </SegmentedView.Sheet>
				  <SegmentedView.Sheet title='虫害'>
				    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				      <Label type='detail' size='xl' text='Segment three' />
				    </View>
				  </SegmentedView.Sheet>
				  <SegmentedView.Sheet title='藤椒百科'>
				    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				      <Label type='detail' size='xl' text='Segment three' />
				    </View>
				  </SegmentedView.Sheet>
				</SegmentedView>
	        </View>


        </View>
      );
  }
}




export class MainDBody extends Component {

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
        paddingBottom:0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>


        <MainDBodyHeader title={this.state.title} type={this.state.type}/>
      </View>
    );
  }
}
