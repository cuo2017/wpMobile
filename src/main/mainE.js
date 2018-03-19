import React, { Component } from 'react';
import { FlatList, ScrollView,Alert,TextInput, Text, ImageBackground, View, Image,  StyleSheet, } from 'react-native';
import {  List, InputItem, WhiteSpace ,Button } from 'antd-mobile';

import {StackNavigator,TabNavigator} from 'react-navigation';

import {NavigationBar} from 'teaset';

import ChartView from 'react-native-highcharts';

import Icon from 'react-native-vector-icons/Ionicons';

import {MainADataBodyListItem} from './mainAData.js';

const styles = StyleSheet.create({
  text:{
    color:'#333',
    fontSize:20,
  },
  label:{
    color:'#aaa',

  }
});
export class MainEDataBodyListItem extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
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


class MainEBodyHeaderBasic extends Component {
  constructor(props){
    super(props);
    this.state={
      health:80,
      rust:20,
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
          plotBorderWidth: null,
          plotShadow: false,
          spacing : [0, 0 , 0, 0],
          backgroundColor: null,
          plotBackgroundColor: null,
      },
      title: {
          // text: '未来灾害发生概率',
          floating:true,
          text: '未来灾害发生概率' + (100 - this.state.health) +'%',
          align: 'center',
          verticalAlign: 'middle',
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
      plotOptions: {
          pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                point: {
                    events: {
                        click: function(e) { // 同样的可以在点击事件里处理
                            chart.setTitle({
                                text: e.point.name+ '\t'+ e.point.y + ' %'
                            });
                        }
                    }
                },
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
          innerSize: '80%',
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

    const homeIcon = (<Icon name="ios-sunny-outline" size={40} color="#333" />)
    const windIcon = (<Icon name="ios-leaf-outline" size={70} color="#333" />)

    return (
      <View style={{
        flex:1,
        width:'100%',
        marginTop:70,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
      }}>
        <ScrollView 
        style={{
          width:'100%'
        }}
        showsVerticalScrollIndicator={false}
        horizontal={false}>
          <View style={{
            width:'100%',
            paddingTop:20,
            backgroundColor:'#fff',
            paddingBottom:20,
            borderBottomWidth:.25,
            borderBottomColor:'#ccc',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'center',
          }}>
            <ChartView style={{width:'100%',height:250}} config={conf} options={options}></ChartView>
            <Text style={{
              marginTop:20,
              color:'#999',
            }}>{homeIcon}</Text>
            <Text style={{
              marginTop:10,
              color:'#999',
              fontSize:18,
            }}>{this.props.data.type}</Text>
            <Text style={{
              marginTop:10,
              color:'#333',
              fontSize:18,
            }}>{this.props.data.notice}</Text>
          </View>

          <View style={{
            width:'100%',
            paddingTop:20,
            backgroundColor:'#fff',
            paddingBottom:20,
            borderBottomWidth:.25,
            borderBottomColor:'#ccc',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'center',
          }}>
            <FlatList data={[
              {key: 'a',label:'最高温',text:this.props.data.high}, 
              {key: 'b',label:'最低温',text:this.props.data.low},
              {key: 'c',label:'土壤温度',text:'10.0 °C'},
              {key: 'd',label:'空气湿度',text:this.props.data.sd},
              ]}
            renderItem={({item}) => <MainADataBodyListItem value={item.label} text={item.text}/>}
            horizontal={true}
            ItemSeparatorComponent={() => <Text style={{marginTop:10,marginBottom:10,width:1,backgroundColor:'#eee'}}></Text>}
            showsHorizontalScrollIndicator = {false} 
            />
          </View>

          <View style={{
            width:'100%',
            backgroundColor:'#fff',
            padding:20,
            borderBottomWidth:.25,
            borderBottomColor:'#ccc',
          }}>
            <View style={{
              flex:1,
              paddingLeft:30,
              paddingRight:0,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center',
            }}>
              <View style={{
                  flex:1,
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'flex-start'}}>
                <Text style={{
                  flex:1,
                }}>{windIcon}
                </Text>
              </View>
              <FlatList 
              style={{
                flex:1,
              }}
              data={[
                {key: 'a',label:'风向',text:this.props.data.fx}, 
                {key: 'b',label:'风力',text:this.props.data.fl},
                ]}
              renderItem={({item}) => <MainEDataBodyListItem value={item.label} text={item.text}/>}
              horizontal={false}
              ItemSeparatorComponent={() => <Text style={{height:1,width:'100%',backgroundColor:'#eee'}}></Text>}
              showsHorizontalScrollIndicator = {false} 
              />
            </View>
          </View>
          <View style={{
            flex:1,
            width:'100%',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
          }}>
            <ChartView 
              style={{width:'100%',height:250}} 
              config={{
                chart: {
                    type: 'spline'
                },
                title: {
                    text: '未来五天温度走势'
                },
                exporting: {
                  enabled:false,
                },
                credits:{
                  enabled:false,
                },
                xAxis: {
                    categories: ['今天', '明天', '后天', '三天后', '四天后']
                },
                yAxis: {
                    title: {
                        text: '温度'
                    },
                    labels: {
                        formatter: function () {
                            return this.value + '°';
                        }
                    }
                },
                tooltip: {
                    crosshairs: true,
                    shared: true
                },
                plotOptions: {
                    spline: {
                        marker: {
                            radius: 4,
                            lineColor: '#666666',
                            lineWidth: 1
                        }
                    }
                },
                series: [{
                    name: '最高温',
                    marker: {
                        symbol: 'diamond'
                    },
                    data: [ parseFloat(JSON.stringify(this.props.data.high).replace(/[^0-9.]/ig,"")),
                            parseFloat(JSON.stringify(this.props.data.forecast11).replace(/[^0-9.]/ig,"")), 
                            parseFloat(JSON.stringify(this.props.data.forecast21).replace(/[^0-9.]/ig,"")), 
                            parseFloat(JSON.stringify(this.props.data.forecast31).replace(/[^0-9.]/ig,"")), 
                            parseFloat(JSON.stringify(this.props.data.forecast41).replace(/[^0-9.]/ig,""))]
                }, {
                    name: '最低温',
                    marker: {
                        symbol: 'diamond'
                    },
                    data: [ parseFloat(JSON.stringify(this.props.data.low).replace(/[^0-9.]/ig,"")),
                            parseFloat(JSON.stringify(this.props.data.forecast12).replace(/[^0-9.]/ig,"")), 
                            parseFloat(JSON.stringify(this.props.data.forecast22).replace(/[^0-9.]/ig,"")), 
                            parseFloat(JSON.stringify(this.props.data.forecast32).replace(/[^0-9.]/ig,"")), 
                            parseFloat(JSON.stringify(this.props.data.forecast42).replace(/[^0-9.]/ig,""))]
                }]
              }}

              ></ChartView>
          </View>
          

        </ScrollView>
      </View>
    );
  }



}

class MainEBodyHeader extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    return(
      <View style={{
          flex:1,
          width:'100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}> 
        <NavigationBar 
          title='图表统计' 
          style={{height:70}}
        />


        <MainEBodyHeaderBasic data={this.props.data}/>


        </View>
      );
  }
}




export class MainEBody extends Component {

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
        height:'150%',
        paddingBottom:0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <MainEBodyHeader data={this.props.data}/>

      </View>
    );
  }
}
