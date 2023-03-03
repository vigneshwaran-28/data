const readline=require("readline-sync");


let screen=[[1, 1, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 0, 0], 
[1, 0, 0, 1, 1, 0, 1, 1], 
[1, 2, 2, 2, 2, 0, 1, 0], 
[1, 1, 1, 2, 2, 0, 1, 0], 
[1, 1, 1, 2, 2, 2, 2, 0], 
[1, 1, 1, 1, 1, 2, 1, 1], 
[1, 1, 1, 1, 1, 2, 2, 1]]




function getResult(x,y,size,prevC,newC){
    if(x<0 || y<0 || x>=size || y>=size || screen[x][y]!= prevC || screen[x][y]== newC)
        return ;
    if(screen[x][y]==prevC){
        screen[x][y]='&';
        getResult(x-1,y,size,prevC,newC)
		getResult(x+1,y,size,prevC,newC)
		getResult(x,y-1,size,prevC,newC)
		getResult(x,y+1,size,prevC,newC);
        screen[x][y]=newC;
    }
}


// let len=parseInt(readline.question("Enter the length of row and column of an array : "));

// let screen=[];

// for(let i=0;i<len;i++){
//     let tempArr=[];
//     for(let j=0;j<len;j++){
//         tempArr.push(readline.question("Enter the data : "));
//     }
//     screen.push(tempArr);
// }

// let x=readline.question("Enter the x coordinate : ");
// let y=readline.question("Enter the y coordinate : ");


	//test
	let x=4,y=4,newC=3;

	let prevC = screen[x][y];


	// let newC = readline.question("Enter the new element to be filled : ");

	getResult( x, y,screen.length ,prevC, newC);

	console.log(screen);

