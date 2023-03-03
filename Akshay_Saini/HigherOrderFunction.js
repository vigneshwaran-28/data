
/*

Basically, a function which takes another function as an argument or returns a function is known as 
a higher order function. Let's deep dive a bit to see both types of implementation, that is: Passing 
a function as an argument to another function. Returning a function from another function

*/

//polyfill for map

/*

let arr=[1,2,3,4,5];

// let res=arr.map(n=>n*2);

Array.prototype.getResult=function(logic){
    let a=[];
    for(let i=0;i<this.length;i++){
        a[i]=logic(this[i]);
    }
    return a;
}
let res=arr.getResult(n=>n*3);

console.log(res);

*/

//Filter,reduce same as map

// bind function 

let obj = {
    name: 'Jack',
  };
  
  let myFunc = function (id, city) {
    console.log(`${this.name}, ${id}, ${city}`);  // id will be undefined
  };
  
  // Accepting any number of arguments passed to myBind
  Function.prototype.myBind = function (obj, ...args) {
    let func = this;
    // Accepting arguments passed to newFunc
    return function (...newArgs) {
      func.apply(obj, [...args, ...newArgs]);
    };
  };
  
  let newFunc = myFunc.myBind(obj, 'a_random_id')
  newFunc('New York') // Jack, a_random_id, New York


 

