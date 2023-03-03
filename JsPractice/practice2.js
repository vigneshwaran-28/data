// let obj1={
//     name:"vignesh",
//     getFullname:function(){
//         return this.name;
//     }
// };

// let obj2={
//     name:"waran",
//     __proto__:obj1
// };

// console.log(obj2.getFullname());


// let animal={
//     sleep:true
// };

// function getStatus(){
//     name:"animal"
//     console.log("constructor");
// }

// getStatus.prototype=animal;

// let g=new getStatus();

// console.log(g.sleep);


// String.prototype.print=function(){
//     console.log(this);
//     alert(this);
// }

// "Vigneshwaran".print();

// let car={
//     name:"bmw",
//     color:"red"
// };

// let getDetail=Object.create(car);

// Object.defineProperty(car,"facility",{
//     value:"luxury"
// });

// console.log(getDetail.name+" "+getDetail.facility);


// console.log(Object.getPrototypeOf(getDetail)===car);

// Object.setPrototypeOf(getDetail,{});

// console.log(getDetail.name+" "+getDetail.facility);


// let name="vigneshwaran";

// class car{
//   constructor(){
//     console.log(name);
//   }
// }

// let c=new car();

// let a=class c{
//     constructor(){
//         console.log("constructor invoked !");
//     }
// }

// function a(){
//     let name='bmw';
//     return (function getName(){
//         return name; 
//     });
// }

// let ab=new a();
// let c=new a();
// console.log(ab());
// console.log(c());


// function name(phrase){
//    return (class first{
//     name="vigne";
//         getName(){
//           console.log(this.name);
//         }
//     })

// };

// let lastName=name("hello");

// new lastName().getName();

// class car{
//     algorithm="secret"
// }

// let c=new car();
// console.log(c._algorithm);


// class car{
//     constructor()
//     get name(){
//         return "bmw";
//     }
//     set name(){

//     }
// }

// class demo extends Array{
   
// }
// let d=new demo(2,3,4,0,1,5);

// d.fill(0);
// console.log(d);


// function changeMapValue(map){
//     // map.set(1,"naresh");
//     map=50;
// }

// let map=new Map();
// map.set(1,"vignesh");
// let a=10
// console.log(a);
// changeMapValue(a);
// console.log(a);

// function demo(b,b){
//     console.log(b);
// }
// demo(10,20);

// let value="233n";

// console.log(Number.isNaN(value));

// let a={c:10};
// let b=a;
// // let b={c:10};

// console.log(a===b);


// let a={
//     name:"vignesh"
// };
// let b={
//     place:"tirupur"
// }

// b.__proto__=a;

try{
    let a=10/"lf";
    console.log(gkfkf);
}
catch(err){
    console.log(err.name);
}

// let a=10/"lf";
// console.log(gkfkf);
console.log("hi");