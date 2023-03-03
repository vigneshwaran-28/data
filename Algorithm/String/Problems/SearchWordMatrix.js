const readline=require("readline-sync");

// let str="CGLGKZWFAKTINGML";

// let arr=[['C','O','D','K','X','T'],['G','T','I','N','G','P'],['L','K','O','L','M','W'],['G','A','A','R','A','L'],['K','F','T','G','R','F'],['Z','W','L','M','T','O']];

let len=parseInt(readline.question("Enter the length of row and column of an array : "));

let arr=[];

for(let i=0;i<len;i++){
    let tempArr=[];
    for(let j=0;j<len;j++){
        tempArr.push(readline.question("Enter the data : "));
    }
    arr.push(tempArr);
}

let str=readline.question("Enter the String to Search : ");


function getResult(x,y,size,level){
    if(level==str.length)
        return true;
    if(x<0 || y<0 || x>=size || y>=size)
        return false;
    if(arr[x][y]==str.charAt(level)){
        let temp=arr[x][y];
        arr[x][y]='&';
        let res=getResult(x-1,y,size,level+1)||getResult(x+1,y,size,level+1)||getResult(x,y-1,size,level+1)||getResult(x,y+1,size,level+1);
        arr[x][y]=temp;
        return res;
    }
    else
        return false;
}

function getStatus(){

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]==str.charAt(0)){
                if(getResult(i,j,arr.length,0)){
                    console.log("Element found !");
                    return;
                }
            }   

        }
    }
console.log("Element not Found !");

}

getStatus();






