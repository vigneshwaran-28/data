/*

It is a technique in functional programming, transformation of the function of multiple arguments into 
several functions of a single argument in sequence. 

*/

function multiply(a){
    return function(b){
        return a*b;
    }
}

let num=multiply(2);

console.log(num(10));



let sum = a => b => b ? sum(a + b) : a;

console.log(sum(10)(20)(3)(4)());


