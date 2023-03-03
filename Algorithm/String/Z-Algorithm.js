const readline=require("readline-sync");

function getPatternArray(){


    for(let i=1;i<resStr.length;i++){
        let left=0,right=i,count=0;
       
        while(right<resStr.length && resStr.charAt(left)==resStr.charAt(right)){
            count++;
            left++;
            right++;
        }
    resArr.push(count);
    }

}

function getIndex(){

    for(let i=0;i<resArr.length;i++){
        if(resArr[i]==pattern.length)
            console.log("Element found at index : "+(i-(pattern.length+1)));
    }

}

let str=readline.question("Enter the String : ");

let pattern=readline.question("Enter the Pattern : ");

let resStr=pattern+'$'+str;

let resArr=[0];

getPatternArray();
getIndex();

