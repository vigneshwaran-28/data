
/*

es5 features
-------------
"use strict"
String[number] access
Multiline strings
String.trim()
Array.isArray()
Array forEach()
Array map()
Array filter()
Array reduce()
Array reduceRight()
Array every()
Array some()
Array indexOf()
Array lastIndexOf()
JSON.parse()
JSON.stringify()
Date.now()
Date toISOString()
Date toJSON()
Property getters and setters
Reserved words as property names
Object methods
Object defineProperty()
Function bind()
Trailing commas

arr.every():
every checks for certain conditions over all the elements in an array and returns boolean value

arr.some();
It checks for only certain elements of an array

*/

let arr=[1,3,4,5,6,6];
// let res=arr.every(ele=>ele>1);
let res=arr.some(ele=>ele>1);
console.log(res);




