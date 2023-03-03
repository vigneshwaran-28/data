let arr=[7,6,5,4,3,2,1];

// let arr=[5,1,2,6,3,4];


let res=[1,1,1,1,1,1,1];

for(let i=0;i<arr.length;i++){
    if(i+1<arr.length && arr[i]<arr[i+1]){
        res[i]+=1;
    }
}


for(let i=arr.length-1;i>=0;i--){
    if(i-1>=0 && arr[i]<arr[i-1] && i==arr.length-1){
       res[i]+=1; 
    }

    if(i-1>=0 && arr[i]<arr[i-1]){
        
    }

}

console.log(res);






// for(let i=arr.length-1;i>=0;i--){
//     if(i-1>=0 && arr[i]>arr[i-1]){
//         if(res[i]>=res[i-1])
//             res[i-1]=res[i]+1;
        
//     }