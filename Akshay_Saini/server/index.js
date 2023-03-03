let webSocket=require("ws");


let wss=new webSocket.Server({port:8080});

wss.on("connection",ws=>{
    console.log("New Client Connected !");
    wss.on("close",()=>{
        console.log("Connection Failed !");
    })
});

