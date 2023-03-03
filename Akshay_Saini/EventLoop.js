/*

Js Engine
 
    It has various components such as call stack , web api where it consists of callback functions .

    There is a call back queue which sends all the callback functions on the queue after it gets 
executed

    It consists of two queue
        Task Queue or callback Queue 
        MicroTask Queue

    Event loop checks for both the call stack and callback queue and microtask queue if the call stack
is empty then the various callbacks are pushed into the call stack to execute it 

    It first checks for the microtask queue if there is any call backs then it is pushed into the call
stack and it finishes the task and then one by one callbacks are pushed into the call stack 

    and then later task Queue functions are pushed into the call stack 
    

    In Microtask queue takes promises and mutation observer callbacks
    
    In Task queue settimeout and event related callbacks are pushed 



Microtask queue:
    Mutation Observer is the thing in which if any changes to the dom tree then it is pushed into the 
callback function 


The MutationObserver interface provides the ability to watch for changes being made to the DOM tree. 
It is designed as a replacement for the older Mutation Events feature, which was part of the DOM3 
Events specification.

*/


//Trust issues with settimeout


setTimeout(()=>console.log("j"),10000);

setTimeout(()=>console.log("After 5 sec !"),5000)

let time=new Date().getTime();

// for(let i=time;i<time+10000;i++){
//     i=new Date().getTime();
// }



 
