let arr=[1,2,3,4,5];

console.log(arr.__proto__.__proto__);


/*

All object has a default prototype of Object in it .

*/

Function.__proto__.myBind=function(){
    console.log("Function method !");
}

function f(){

}

console.log(f.myBind());


