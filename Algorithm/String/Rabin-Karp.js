const readline=require("readline-sync");

let resArr=[];

function getHashValue(str){
    let hashValue=0;
    for(let i=0;i<str.length;i++){  
        hashValue+=str.charCodeAt(i)*Math.pow(prime,i);
    }
    return hashValue;
}

function generateArr(){
    
    for(let i=0;i<str.length;i++){
        resArr.push(getHashValue(str.substring(i,i+pattern.length)));
    }
    for(let i=0;i<resArr.length;i++){
        if(resArr[i]==compareValue){
            let j=i,k=0;
            for(k=0;k<pattern.length;k++){
                if(str.charAt(j++)!=pattern.charAt(k))
                    break;
            }
            if(pattern.length==k)
                console.log("Element found at : "+i);
        }
    }

}


let str=readline.question("Enter the String : ");

let pattern=readline.question("Enter the Pattern : ");

let prime=3;

let compareValue=getHashValue(pattern);


generateArr();
