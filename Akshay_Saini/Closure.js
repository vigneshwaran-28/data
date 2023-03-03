
/*

A closure is the combination of a function bundled together (enclosed) with references to its 
surrounding state (the lexical environment). In other words, a closure gives you access to an outer 
function's scope from an inner function.


function a(){
    let num=0;
    return function b(){
        console.log("Key Press : ",++num);
    }
}

let func=a();
func();
func();

*/

//Using settimeout

// for(let i=1;i<=5;i++){
//     setTimeout(() => {
//         console.log(i);
//     }, i*1000);
// }


//First class Functions

/*

First-Class Function: A programming language is said to have First-class functions if functions in 
that language are treated like other variables. So the functions can be assigned to any other variable 
or passed as an argument or can be returned by another function. JavaScript treat function as a 
first-class-citizens

*/

function getRes(){
    let num=100;
    return function(){
        console.log(`res ${num++}`);
    };
}
let a=getRes();

b(a);
b(a);


function b(func){
    func();
}

