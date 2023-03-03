// import {a,b} from './module.js'

// console.log(a,b);

let http=require('http');

let server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('<h1>Hi hello hi h</h1>');
        res.end(); 
    }
}); 
  
server.on('connection',()=>console.log("connected"));

server.listen(3000);

