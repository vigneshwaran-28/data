
const readline=require("readline-sync");

let arr=[],data=0;

do{

  data=parseInt(readline.question("Enter the data : "));
  if(data>=0)
      arr.push(data);
  
  }while(data>=0);


  arr.sort(function(a,b){
    return a-b;
  });

  for(let i=1;i<arr.length-1;i+=2){
   [arr[i],arr[i+1]]= [arr[i+1],arr[i]];
  }


  console.log(arr);

