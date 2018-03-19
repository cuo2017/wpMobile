import React, { Component } from 'react';

const data = {
	city:'',
}
fetch('http://cuostudio.com/getWeaByWeb')
.then((response) => response.json())
.then((responseJson) => {
	data.city = JSON.parse(responseJson).city;
}).then(()=>{
	// console.error(data.city);
}).catch((error) => {
console.error(error);
});

fetch('http://cuostudio.com/getDataBySys1')
.then((response) => response.json())
.then((responseJson) => {
let a = responseJson;
}).catch((error) => {
console.error(error);
});


export default data;