//Arrow function

const { response } = require("express");

/*

class car{
    constructor(){
        this.names="vig";
    }
    name(){
        console.log(this.names);
    }
    getDetail(){
       let exp=()=>{
            console.log("exp ",this.names);
        }
        exp();
    }
}
 
let c=new car();
c.name();
c.getDetail();

*/

/*

coercion:
Type coercion is the process of converting value from one type to another (such as string to number, 
object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type 
coercion. To recall, primitives are: number, string, boolean, null, undefined + Symbol (added in ES6).




*/

// let arr8 = new Uint8Array([0, 1, 2, 3]);

// another view on the same data
// let arr16 = new Uint16Array(arr8.buffer);
// console.log(arr8.buffer);


/*

ArrayBuffer:
The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. It is an 
array of bytes, often referred to in other languages as a "byte array".

typed Array:
typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data 
in memory buffers. Array objects grow and shrink dynamically and can have any JavaScript value. 
JavaScript engines perform optimizations so that these arrays are fast


*/

// async function pro(){
//     await new Promise((resolve,reject)=> setTimeout(()=> {
//         console.log("1");
//         resolve("hello");
//     },2000)).then((data,err)=>{console.log(data);})
//     await new Promise((resolve,reject)=> setTimeout(()=>{
//         console.log("2");
//         resolve("yoo")
//     },1000)).then((data,err)=>{console.log(data);})
//     await new Promise((resolve,reject)=> setTimeout(()=> {
//         console.log("3");
//         resolve("suma");
//     },4000)) .then((data,err)=>{console.log(data);})
// }
// pro();

// console.log(navigator.cookieEnabled);

/*

The let keyword
The const keyword
Arrow Functions
The ... Operator
For/of
Map Objects
Set Objects
Classes
Promises
Symbol
Default Parameters
Function Rest Parameter
String.includes()
String.startsWith()
String.endsWith()
Array.from()
Array keys()
Array find()
Array findIndex()
New Math Methods
New Number Properties
New Number Methods
New Global Methods
Object entries
JavaScript Modules

*/

fetch('https://reqres.in/api/users?page=2')
.then((response)=>response.json())
.then((data)=>console.log(data))

