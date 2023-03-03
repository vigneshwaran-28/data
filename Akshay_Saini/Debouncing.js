/*

Debouncing is a programming pattern or a technique to restrict the calling of a time-consuming 
function frequently, by delaying the execution of the function until a specified time to avoid 
unnecessary CPU cycles, and API calls and improve performance.

*/


// function debounce(func, timeout = 300){
//     let timer;
//     return (...args) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => { func.apply(this, args); }, timeout);
//     };
//   }
//   function saveInput(){
//     console.log('Saving data');
//   }
//   const processChange = debounce(() => saveInput());

// Debouncing in Javascript
let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
}

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  }
}

const betterFunction = debounce(getData, 300);


