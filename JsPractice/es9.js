/*

Asynchronous Generators and Iteration

for await of loop

Rest/Spread Properties
ES9 supports the use of Rest and Spread operators with Objects.

Promise: finally()
The finally() is executed whenever a promise is settled, regardless of its outcome. This function 
returns a promise. It can be used to avoid code duplication in both the promise's then() and catch() 
handlers.

Regex operations

*/

let express=require('express');
let app=express();
app.get('/',(req,res)=>{
    res.send('Hello World');
    res.end();
})

app.listen(3000);