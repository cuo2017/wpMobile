import React, { Component } from 'react';
import { Animated,ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import { List, InputItem, WhiteSpace ,Button } from 'antd-mobile';

import {StackNavigator,TabNavigator} from 'react-navigation';

import ChartView from 'react-native-highcharts';

import {MainAContentHeader} from './mainAContentHeader.js';

export default class mainAChart extends Component {
  constructor(props){
    super(props);
    this.state={
      rust:'',
    }
    this.componentDidMount = () => {
      fetch('http://cuostudio.com/countDisaster')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          rust:JSON.parse(responseJson),
        });
      }).then(()=>{
        // console.error(data.city);
      }).catch((error) => {
      console.error(error);
      });
    }
  }
  render(){
    var Highcharts='Highcharts';
    var conf={
      chart: {
        type: 'column',
        backgroundColor: '#fff',
        plotBackgroundColor: '#fff',
      },
      title: {
          text: '最近一月灾害情况',
          style:{
            "color":"#333",
          }
      },
      xAxis: {
          categories: [''],
      },
      yAxis: {
          title: {
              text: '发生次数',
              style:{
                'color':'#333',
              }
          },
          labels:{
            style:{
              'color':'#333'
            }
          }

      },
      credits: {
         enabled: false
      },
      
      exporting: {
          enabled: false
      },
      series: [{
          name: '锈病',
          data: [parseInt(this.state.rust)]
        },{
          name: '虫害',
          data: [0]
        },{
          name: '冻害',
          data: [0]
        },{
          name: '干旱',
          data: [0]
        }],
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
        <MainAContentHeader value='图表数据'/> 
        <View style={{
          paddingTop:20,
          backgroundColor:'#fff',
        }}>
          <ChartView style={{height:250}} config={conf} options={options}></ChartView>
        </View>


        
      </View>
    );
  }
}








// import Echarts from 'native-echarts';
// import Dimensions from 'Dimensions';
// const Width = Dimensions.get('window').width;


// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     width:Width,
//   },
//   titleView:{
//     height:50,
//     paddingTop:0,
//     backgroundColor:'transparent',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title:{
//     color:'white',
//     fontSize:15,
//     textAlign:'center',
//   },
//   chart:{
//   	color:'#fff',
//   	backgroundColor:'#fff',
//   }
// });


// export default class MainAChart extends Component{
//   constructor(props) {
//       super(props);
//       this.state = {
//         rust:[2],
//         bugs: [6],
//         frost:[4],
//         drought:[3],
//       }
//   }

//   render() {
//     const option = {
//           //点击某一个点的数据的时候，显示出悬浮窗
//           tooltip : {
//               trigger: 'axis'
//           },
//           //可以手动选择现实几个图标
//           legend: {
//               data:['锈病','虫害','冻害','干旱']
//           },
//           //各种表格
//           // toolbox: {
//           //     //改变icon的布局朝向
//           //     //orient: 'vertical',
//           //     show : true,
//           //     showTitle:true,
//           //     feature : {
//           //         //show是否显示表格，readOnly是否只读
//           //         dataView : {show: false, readOnly: true},
//           //         magicType : {
//           //           //折线图  柱形图    总数统计 分开平铺
//           //           // type: ['line', 'bar','stack','tiled'],
//           //           type: [ 'bar'],
//           //         },

//           //     }
//           // },
//           xAxis : [
//               {
//                   //就是一月份这个显示为一个线段，而不是数轴那种一个点点
//                   boundaryGap:true,
//                   type : 'category',
//                   data : ['最近一月']
//               }
//           ],
//           yAxis : [
//               {
//                   type : 'value',
//                   name : '次数'
//               }
//           ],
//           //图形的颜色组
//           color:['rgb(249,159,94)','rgb(67,205,126)','skyblue','yellow'],
//           //需要显示的图形名称，类型，以及数据设置
//           series : [
//               {
//                   name:'锈病',
//                   //默认显
//                   type:'bar',
//                   data:this.state.rust
//               },
//               {
//                   name:'虫害',
//                   type:'bar',
//                   data:this.state.bugs
//               },
//               {
//                   name:'冻害',
//                   type:'bar',
//                   data:this.state.frost
//               },
//               {
//                   name:'干旱',
//                   type:'bar',
//                   data:this.state.drought
//               }
//           ]
//         };
//   return (
//   		<View style={{
//             flex:3,
//             borderBottomWidth:.25,
//             borderBottomColor:'#fff',
//             width:'100%',
//           }}>
// 	      <View style={styles.container}>
// 	        <View style={styles.titleView}>
// 	          <Text style={styles.title}>最近一月灾害发生次数</Text>
// 	        </View>

// 	        <Echarts width={Width} height={Width/3*2} style={{
// 	        	backgroudColor:'#fff',
// 	        }} option={option}/>
// 	      </View>
//       </View>
//     );
//   }
// }
