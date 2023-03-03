
const readline=require("readline-sync");

function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            console.log("Element found !");
            return;
        }
    }          
    
    console.log("Element Not found !");

}

let arr=[],data=0;

do{

data=readline.question("Enter the data : ");
if(data>0)
    arr.push(data);

}while(data>0);

let key=readline.question("Enter the Key to Search : ");

linearSearch(arr,key);


