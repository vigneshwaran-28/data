const readline=require("readline-sync");

let patternArr=[0];

let i=0,j=1;

let str=readline.question("Enter the String : ");

let pattern=readline.question("Enter the Pattern : ");

    while(j<pattern.length){
        if(pattern.charAt(j)==pattern.charAt(i)){
            patternArr.push(i+1);
            i++;
            j++;
        }
        else if(i==0){
            // if(pattern.charAt(i)!=pattern.charAt(j))
            patternArr.push(0);
            j++;
        }
        else{
            i=patternArr[i-1];
        }
    }

j=0,i=0;

function getResult(){

    while(i<str.length){
        if(str.charAt(i)==pattern.charAt(j)){
            j++;
            i++;
            if(j==pattern.length){
                console.log("Element found at index : "+(i-j));
            }
        }
        else if(str.charAt(i)!=pattern.charAt(j)){
            if(j==0)
                i++;
            if(j!=0)
                j=patternArr[j-1];
        }
    }
}

getResult();
