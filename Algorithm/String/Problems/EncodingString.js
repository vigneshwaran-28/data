let str="MY NAME IS P ATHA";

let row=5,j;

let arr=[];

for(let i=0;i<str.length;i++){
    arr[i]=false;
}

let res="",star="*";

for(let i=0;i<row;i++){
    let temp=false;
   for(j=i;j<str.length;(j+row>str.length+1)?j+=row:(temp)?j++:j+=row){
     temp=false;
     if(!arr[j]){
        if(str.charAt(j)==' '){
            res+="*";
        }
        else
            res+=str.charAt(j);
        arr[j]=true;
     }
     else{
        temp=true;
     }
   }
//    console.log(arr);
   if(i!=row-1){
    res+=star;
    star+="*";
   }
  
}


for(let i=0;i<arr.length;i++){
    if(!arr[i]){
        res+=str.charAt(i);
    }
}

console.log(res);

