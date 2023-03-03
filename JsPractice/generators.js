
// function* gen(){
//     let i=0;
//     while(i++<5)
//         yield i;
//     return i;
// }

// let res=gen();
// for(let i of res){
//     console.log("i",i);
// }

/*

Generators
Regular functions return only one, single value (or nothing).

Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to 
create data streams with ease.

The result of next() is always an object with two properties:

value: the yielded value.
done: true if the function code has finished, otherwise false

Generators are created by generator functions function* f(…) {…}.
Inside generators (only) there exists a yield operator.
The outer code and the generator may exchange results via next/yield calls.
In modern JavaScript, generators are rarely used. But sometimes they come in handy, because the ability of a function to exchange data with the calling code during the execution is quite unique. And, surely, they are great for making iterable objects.

Also, in the next chapter we’ll learn async generators, which are used to read streams of asynchronously generated data (e.g paginated fetches over a network) in for await ... of loops.

In web-programming we often work with streamed data, so that’s another very important use case.

*/


// async function* generateSequence(start, end) {

//     for (let i = start; i <= end; i++) {
  
//       // Wow, can use await!
//       await new Promise(resolve => setTimeout(resolve, 1000));
  
//       yield i;
//     }
  
//   }
  
//   (async () => {
  
//     let generator = generateSequence(1, 5);
//     for await (let value of generator) {
//       console.log(value); // 1, then 2, then 3, then 4, then 5 (with delay between)
//     }
  
//   })();

//When we expect the data to come asynchronously, with delays, their async counterparts can be used, and for await..of instead of for..of.
  
function num(){
    return [1,10,91,739,5275,32491,168571,712891,2345851][2];
}

console.log(num());