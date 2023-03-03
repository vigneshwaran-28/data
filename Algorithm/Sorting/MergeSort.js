const readline=require("readline-sync");

function merge_Arrays(leftArr, rightArr) {
    let array = []
    while (leftArr.length && rightArr.length) {
       if (leftArr[0] < rightArr[0]) {
          array.push(leftArr.shift())
       } else {
          array.push(rightArr.shift())
       }
    }
    return [ ...array, ...leftArr, ...rightArr ]
 }
 
 function merge_sort(arr) {
    const middle_index = arr.length / 2
    if(arr.length < 2) {
       return arr;
    }
    const leftArr = arr.splice(0, middle_index)
    return merge_Arrays(merge_sort(leftArr),merge_sort(arr))
 }


let arr=[];

do{

  data=parseInt(readline.question("Enter the data : "));
  if(data>0)
      arr.push(data);
  
  }while(data>0);
   

console.log(merge_sort(arr)) // [1, 2, 3, 5]

