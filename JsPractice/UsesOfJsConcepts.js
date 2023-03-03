
/*

use Strict:
The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, 
you can not, for example, use undeclared variables.
With Strict mode you can't delete variables and functions


let x = 3.14;
x=undefined;
delete x;  
// This will cause an error 
console.log(x);


function and function expression:
The main difference between a function expression and a function declaration is the function name, which can be 
omitted in function expressions to create anonymous functions. 
Function expressions are invoked to avoid polluting the global scope. Instead of your program being aware of many 
different functions, when you keep them anonymous, they are used and forgotten immediately.


Arrow functions:
this and Arrow Functions: Arrow functions, introduced in ES6, provides a concise way to write functions in JavaScript. 
Another significant advantage it offers is the fact that it does not bind its own this. In other words, the context inside 
arrow functions is lexically or statically defined


Objects:
An object is a collection of properties, and a property is an association between a name (or key) and a value. A 
property's value can be a function, in which case the property is known as a method. Objects in JavaScript, just as in 
many other programming languages, can be compared to objects in real life


Garbage Collector:
The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no 
longer needed and reclaim it


prototype:
In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is 
called the prototype

classes:
Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are 
built on prototypes but also have some syntax and semantics that are unique to classes. 


Promises:
Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple 
asynchronous operations where callbacks can create callback hell leading to unmanageable code.


Async/await:
The purpose of async / await is to simplify the syntax necessary to consume promise-based APIs. The behavior of 
async / await is similar to combining generators and promises. Async functions always return a promise.


Fetch:
The fetch() method in JavaScript is used to request data from a server. The request can be of any type of API that returns 
the data in JSON or XML. The fetch() method requires one parameter, the URL to request, and returns a promise.


xmlhttprequest:
XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a 
full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.


Currying:
Currying is a technique in functional programming that performs the transformation of a function with multiple arguments 
into several functions containing a single argument in a sequence. In the curried function, we simply wrap a function 
inside a function.


Closure:
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the 
lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.


new Function:
If you need to use String as a function then it is better to go for new Function.

call:
The call() method is a predefined JavaScript method. It can be used to invoke (call) a method with an owner object as 
an argument (parameter). With call() , an object can use a method belonging to another object.

apply:
The apply() method calls the specified function with a given this value, and arguments provided as an array (or an 
array-like object).

bind:
 It allows you to create a new function from an existing function, change the new function's this context, and 
provide any arguments you want the new function to be called with.

Property flags in object:
writable,configurable,enumerable

function that are used to limit the access of object
preventExtension-prevents in adding the property to the object
seal-prevents the object from adding and removing properties which configurable:false
freeze-prevents from adding removing and modifiying the properties which configurable:false,writable:false

static:
Static methods are often utility functions, such as functions to create or clone objects, whereas static 
properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

class Name{
    static getName(){
        return "vignesh"
    }
}
let a=new Name();
console.log(Name.getName());


callback:
A callback is a function passed as an argument to another function. This technique allows a function to call another 
function. A callback function can run after another function has finished

Promise:
Promise constructor takes only one argument which is a callback function (and that callback function is also referred as 
an anonymous function too). Callback function takes two arguments, resolve and reject. Perform operations inside the 
callback function and if everything went well then call resolve.

Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple 
asynchronous operations where callbacks can create callback hell leading to unmanageable code.

There are 6 static methods of Promise class:

Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.
Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as an array of objects with:
status: "fulfilled" or "rejected"
value (if fulfilled) or reason (if rejected).
Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.
Promise.any(promises) (recently added method) – waits for the first promise to fulfill, and its result becomes the outcome. If all of the given promises are rejected, AggregateError becomes the error of Promise.any.
Promise.resolve(value) – makes a resolved promise with the given value.
Promise.reject(error) – makes a rejected promise with the given error.


Promisification:
“Promisification” is a long word for a simple transformation. It’s the conversion of a function that accepts a callback 
into a function that returns a promise.

await/async:
Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code 
wait until the promise returns a result. It only makes the async block wait


Temporal dead Zone:
Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed. Temporal Dead 
Zone starts when the code execution enters the block which contains the let or const declaration and continues until the 
declaration has executed.




*/
let arr=[1,2]
arr.jd="jfl";
console.log(arr);