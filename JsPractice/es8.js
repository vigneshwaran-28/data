/*

string_value.padStart(targetLength [, padString])
string_value.padEnd(targetLength [, padString])

*/

// let str='488994';
// str=str.padStart(5,'hgig');
// console.log(str);

/*

Trailing commas 

function sumOfMarks(marks,){ // trailing commas are ignored
      let sum=0;
      marks.forEach(function(e){
         sum+=e;
      })
      return sum;
   }

   console.log(sumOfMarks([10,20,30]))
   console.log(sumOfMarks([1,2,3],))


Object:entries() and values()
ES8 introduces the following new methods to the built-in Object type −

Object.entries − The Object.entries() method can be used to access all the properties of an object.

Object.values() − The Object.values() method can be used to access values of all properties of an object.

Object.getOwnPropertyDescriptors() − This method returns an object containing all own property 
descriptors of an object. An empty object may be returned if the object doesn't have any properties.

*/

/*

Async and Await
Promise chaining with Async/await

*/
// process.stdin.on('readable',()=>{
//    let d;
//    while((d=process.stdin.read())!==null){
//       process.stdout.write(d);
//    }
//    process.exit();
// });

// process.stdin.pipe(process.stdout);

let a=require('./es7');
console.log(a);
let a6=require('./es7');
