/*

Pyramid of Doom
As calls become more nested, the code becomes deeper and increasingly more difficult to manage, 
especially if we have real code instead of ... that may include more loops, conditional statements 
and so on.

That’s sometimes called “callback hell” or “pyramid of doom.”


Inversion of control
when one function is passed as callback of function to another function then there is no gurantee 
of execution it may get executed or it may not get executed, this part has no control hence it is 
known as Inversion of control .

*/

let arr=[1,2,3,4,5];

let promise= createOrder(arr)
.then((promise)=>console.log(promise))
.catch((err)=>console.log(err))

 function createOrder(arr){
    let pr=new Promise((resolve,reject)=>{
        if(arr.length==0)
            reject("There is no element!");
        resolve("creation of order was successful !");
    });
    
    return pr;
}

