let arr=[2,1,5,6,2,3];

//l=0 0 2 3 2 5   r= 0 5 3 3 5 5 

let stack=[],left=[],right=[];

for(let i=0;i<arr.length;i++){
    if(stack.length==0){
        left[i]=0;
        stack.push(i);
    }
    else{
        while(stack.length!=0 && arr[i]<=arr[stack[stack.length-1]]){
            stack.pop();
        }
    
        left[i]=(stack.length==0)?0:stack[stack.length-1]+1;
        stack.push(i);
    }
}

console.log(left);

