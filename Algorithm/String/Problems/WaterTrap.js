
const readline=require("readline-sync");

let arr=[],data=0;

do{

  data=parseInt(readline.question("Enter the data : "));
  if(data>=0)
      arr.push(data);
  
  }while(data>=0);

  let totalAreaBlock=0;

  let leftMax=[];
  leftMax[0]=[arr[0]]
  let rightMax=[];
  rightMax[arr.length-1]=[arr[arr.length-1]];
  
  for(let j=1;j<arr.length;j++){
      leftMax[j]=(leftMax[j-1]<arr[j])?arr[j]:leftMax[j-1];
  }
  
  for(let j=arr.length-2;j>=0;j--){
      rightMax[j]=(rightMax[j+1]<arr[j])?arr[j]:rightMax[j+1];
  }
  
  
  for(let i=1;i<arr.length;i++){   
      totalAreaBlock+=(Math.min(leftMax[i],rightMax[i])-arr[i]);
  }
console.log(totalAreaBlock);


