import React, { Component } from 'react';
import { Animated,ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import { List, InputItem, WhiteSpace ,Button } from 'antd-mobile';

import {StackNavigator,TabNavigator} from 'react-navigation';

import ChartView from 'react-native-highcharts';

import {MainAContentHeader} from './mainAContentHeader.js';

export default class mainADisaster extends Component {

	constructor(props){
		super(props);
		this.state={
			health:100,
			rust:0,
		}
		this.componentDidMount = () => {
			fetch('http://cuostudio.com/getDataBySys1')
			.then((response) => response.json())
			.then((responseJson) => {
				let data = responseJson;
				this.setState({
					health:100-parseInt(data.degree),
					rust:parseInt(data.degree),
				});
			}).catch((error) => {
			console.error(error);
			});
		}
	}

  render(){
    var Highcharts='Highcharts';
    var conf={
      	chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: 0,
	        plotShadow: false
	    },
	    title: {
	        // text: '未来灾害发生概率',
	        text: '未来灾害发生概率为 '+ (100 - this.state.health) +'%',
	        align: 'center',
	        verticalAlign: 'middle',
	        y: 60
	    },
	    tooltip: {
	        headerFormat: '{series.name}<br>',
	        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
	    },
	    plotOptions: {
	        pie: {
	            dataLabels: {
	                enabled: true,
	                distance: 10,
	                style: {
	                    color: '#333',
	                }
	            },
	            startAngle: -90,
	            endAngle: 90,
	            center: ['50%', '75%']
	        }
	    },
	    exporting:{
	    	enabled:false,
	    },
	    credits: {
         enabled: false,
      	},
	    series: [{
	        type: 'pie',
	        name: ' 未来发生概率',
	        innerSize: '60%',
	        data: [
	            ['锈病' ,   this.state.rust],
	            // ['虫害',   21],
	            // ['冻害', 12.8],
	            // ['干旱',    8.5],
	            {
	                name: '健康',
	                y: this.state.health,
	                dataLabels: {
	                    // 数据比较少，没有空间显示数据标签，所以将其关闭
	                    enabled: true,
	                }
	            }
	        ]
	    }]
    };

    const options = {
        // global: {
        //     useUTC: true
        // },
        // lang: {
        //     decimalPoint: ',',
        //     thousandsSep: '.'
        // }
    };

    return (
      <View>
        <MainAContentHeader value='灾害预警'/> 
        <View style={{
          paddingTop:20,
          backgroundColor:'#fff',
        }}>
          <ChartView style={{height:200}} config={conf} options={options}></ChartView>
        </View>
        <View style={{
          height:10,
        }}>
        </View>
      </View>
    );
  }
}
