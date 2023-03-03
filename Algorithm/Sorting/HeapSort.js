const readline=require("readline-sync");


function heapSort(arr,len){
    let iterateRoot=Math.floor(len/2)-1;
    
    for(let i=iterateRoot;i>=0;i--){
       
        let left=2*i+1,right=2*i+2;
        
        if(( arr[left]>arr[right] || right>=len )&& arr[left]>arr[i]){
            [arr[i],arr[left]]=[arr[left],arr[i]];
        }
        
        else if(right<len && arr[i]<arr[right]){
            [arr[i],arr[right]]=[arr[right],arr[i]];
        }
        
    }
   
    len-=1;
   
    [arr[0],arr[len]]=[arr[len],arr[0]];
   
    if(len>1)
        heapSort(arr,len);
}


let arr=[];

do{

  data=parseInt(readline.question("Enter the data : "));
  if(data>0)
      arr.push(data);
  
  }while(data>=0);
  
heapSort(arr,arr.length)

console.log(arr);


