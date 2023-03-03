
const readline=require("readline-sync");

let arr=[],data=0;

do{

  data=parseInt(readline.question("Enter the data : "));
  if(data>=0)
      arr.push(data);
  
  }while(data>=0);

let mystack=[],left=[],right=[];

  for(let i=0;i<arr.length;++i)
        {
            if(mystack.length==0)
            {    left[i] = 0;   mystack.push(i);    }
            else
            {
                while(!mystack.length==0 && arr[mystack[mystack.length-1]]>=arr[i])
                    mystack.pop();
                left[i] = mystack.length==0?0:mystack[mystack.length-1]+1;
                mystack.push(i);
            }
        }
        while(!mystack.length==0) 
            mystack.pop();
        
        for(let i=arr.length-1;i>=0;--i) 
        {
            if(mystack.length==0)
            {   right[i] = arr.length-1; mystack.push(i);    }
            else
            {
                while(!mystack.length==0 && arr[mystack[mystack.length-1]]>=arr[i])
                    mystack.pop();
                right[i] = mystack.length==0?arr.length-1:mystack[mystack.length-1]-1;
                mystack.push(i);
            }
        }
        let mx_area = 0;    //Stores max_area
        for(let i=0;i<arr.length;++i)
            mx_area = Math.max(mx_area,arr[i]*(right[i]-left[i]+1));
    

console.log(mx_area);



