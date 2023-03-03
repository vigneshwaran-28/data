const express = require("express");
const hello=require('./hello');
const hi=require('./hi');
const final=require('./final');


const app = express();
// let arr=[hello,hi];
let arr=[];
app.use(express.json());
console.log(...arr);
app.post('/',...arr,final);

const port = 3000;
console.log(port);
app.listen(port); 
