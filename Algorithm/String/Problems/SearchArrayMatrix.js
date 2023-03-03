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

let str1=[],data=0;
do{
     data=readline.question("Enter the String : ");
     str1.push(data);
}while(data!=0);


function getResult(x,y,size,level,k){
    if(level==str1[k].length)
        return true;
    if(x<0 || y<0 || x>=size || y>=size)
        return false;
    if(arr[x][y]==str1[k].charAt(level)){
        let temp=arr[x][y];
        arr[x][y]='&';
        let res=getResult(x-1,y,size,level+1,k)||getResult(x+1,y,size,level+1,k)||getResult(x,y-1,size,level+1,k)||getResult(x,y+1,size,level+1,k);
        arr[x][y]=temp;
        return res;
    }
    else
        return false;
}

function getStatus(){
    for(let k=0;k<str1.length;k++){
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr[i].length;j++){
                if(arr[i][j]==str1[k].charAt(0)){
                    if(getResult(i,j,arr.length,0,k)){
                        console.log(str1[k]);
                    }
                }   
    
            }
        }
    }
   

}

getStatus();






