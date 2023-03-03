const readline=require("readline-sync");

function Quicksort(array){
    if (array.length < 2){
       return array;
    }
    let pivot = array[array.length - 1]
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < array.length - 1; i++){
       if (array[i] < pivot) {
         leftArr.push(array[i])
       } else {
         rightArr.push(array[i])
       }
    }
    return [...Quicksort(leftArr), pivot, ...Quicksort(rightArr)];
 }

 


let arr=[];

do{

  data=parseInt(readline.question("Enter the data : "));
  if(data>0)
      arr.push(data);
  
  }while(data>0);
  

console.log(Quicksort(arr)) // [1, 2, 3, 5]




