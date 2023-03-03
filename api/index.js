const express=require('express');

const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    console.log("/ api");
    res.send("Hello World");
});

const courses=[
    {
        id:1,
        name:"vignesh"
    },
    {
        id:2,
        name:"nisanth"
    },
    {
        id:3,
        name:"prathap"
    }
];

app.get('/api/courses',(req,res)=>{
    res.send(courses); 
});

// app.get('/api/courses/:id',(req,res)=>{
//     const course=courses.find(c=>(c.id)===parseInt(req.params.id));
//     if(!course){
//         res.send('course not avalilable');
//         res.statusCode=404;
//     }
//     else{
//         res.send(course);
//     }
// });
 

app.post('/api/courses',(req,res)=>{
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.setHeader('content-type', 'application/json');
    // res.set('Content-Type', 'text/plain');
    console.log("post"); 
    console.log("before ",req);
    const course={
        id:courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(JSON.stringify(course));
});


const port=process.env.port||3000;

app.listen(3000,()=>console.log("App listening at port 3000"))

 