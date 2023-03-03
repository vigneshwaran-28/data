
const readline=require("readline-sync");

let recursiveFunction = function (arr, x, start, end) {
	
	if (start > end) {
        console.log("Element not Found !");
        return;
    }
   
	let mid=Math.floor((start + end)/2);

	if (arr[mid]===x) {
        console.log("Element Found !");
        return;
    }
       
		
	if(arr[mid] > x)
		return recursiveFunction(arr, x, start, mid-1);
	else
		return recursiveFunction(arr, x, mid+1, end);
}



let arr=[],data=0;

do{

  data=readline.question("Enter the data : ");
  if(data>0)
      arr.push(data);
  
  }while(data>0);


let key=readline.question("Enter the Key to Search : ");

  
  recursiveFunction(arr,key,0,arr.length);

