const readline=require("readline-sync");

function selectionSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (lowest !== i) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }
  return arr
}

let arr=[];

do{

  data=parseInt(readline.question("Enter the data : "));
  if(data>0)
      arr.push(data);
  
  }while(data>0);
  

console.log(selectionSort(arr)) // [1, 2, 3, 5]