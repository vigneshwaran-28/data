/*

console.log("Hello");

// message=9;

console.log();

function getNum(){
    return "hello";
}

let num=123447;

let l=BigInt(num);

console.log(l);

alert("Hello");

let inp=prompt("Enter the value to get Input ",10);

console.log(inp);

let checkStatus=confirm("Are u ok ?");

alert((checkStatus)?"Ready to work":"Need some rest");

// alert(null!==undefined);


let inp=prompt("Enter the value to get Input ",10);

console.log(inp);

let name1;

alert(name1??"Vignesh");
console.log(name1);

function getNum(a,b="Hello"){
   return a+b;
}

console.log(getNum("Hi "));

b=!null;

console.log(b);

console.log(sayHi);
var sayHi=function(){
    alert("Hello Function !");
};

sayHi();

sum(10,20);

var sum=(a,b)=>{
    alert(a+b);
}

var car={
    name:"volvo",
    color:"red",
    sizes:{
        size:"large",
        comfort:"luxury"
    }
};

// console.log(car.color);

// for(let key in car){
//     console.log(key+":"+car[key]);
// }

let copy=Object.assign({},car);

// console.log(copy.name);

// car.sizes.comfort="medium";

// console.log(copy.sizes.comfort);


copy=structuredClone(car);

car.sizes.comfort="medium";

console.log(copy.sizes.comfort);

let a={
  car:{
    name:"bmw"
  } //"four wheeler"
};

// function getsize(){
//     return "vignesh";
// }

// a.detail=getsize;

console.log(a?.car?.name);

let id=Symbol.for("vignesh");

let car={
    name:"bmw",
};

car[id]="Expensive";

let id1=Symbol.for("vignesh");

console.log(car[id1]);

let car={
    name:"bmw",
    num:1000,
    // [Symbol.toPrimitive](hint){
    //     alert(`hint ${hint}`);
    //     return (hint=="string")?`name is ${this.name}`:this.num;
    // }

    toString(){
        return "the name is : "+this.name;
    },

    // valueOf(){
    //     return this.num;
    // }


}

alert(car+500);

alert(Number(0)?"true":"false");

alert(new Number(0)?"true":"False");

console.log(parseInt("101",2));

console.log("hi".charCodeAt(0));

console.log(String.fromCharCode(65));

console.log("hi".codePointAt(0));

console.log(String.fromCodePoint(65));

let arr=[1,2,3,4,5];

// arr.forEach((num)=>{
//     return (num*2);
// });

// console.log(res);

let res=arr.reduce((sum,num)=>sum+num,0);

console.log(res);

let map=new Map();

map.set(1,"vignesh");
map.set(2,"waran");

for(let key of map.keys())
    console.log(key+" "+map.get(key));

let car={
    name:"bmw",
    color:"red"
};



// for(let key of Object.keys(car))
//     console.log(key+" "+car[key]);

for(let key of Object.values(car))
    console.log(key);

let [name,lastname,...arr]=["vignesh","waran",1,1,2];

console.log(name+" "+lastname+" "+arr);
let car={
    name:"vignesh",
    toJSON(){
        return `name is ${this.name}`
    }
};

console.log(JSON.stringify(car));

function getNum(a,b,...arr){
    return arr;
}

let res=getNum(10,20,30,40,50);

console.log(res);

console.log(a);

let a=90;

console.log("g");

(function(){
    console.log("hello")
})();

let count=0;
let period=setInterval(()=>{
    console.log("hello");
    count++;
    if(count==2)
        clearInterval(period);
},2000);

setTimeout(()=>{
    console.log("hello");
},2000);

// let car={
//     name:"bmw",
//     color:"red",
//     size:{
//         getSize:0
//     }
// };

// // let temp=Object.assign({},car);

// let temp=structuredClone(car);

// car.size.getSize=100;

// console.log(temp.size.getSize);

let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = structuredClone(toRaw(user));
  
//   alert( user.sizes === clone.sizes ); // false, different objects
  
//   // user and clone are totally unrelated now
//   user.sizes.width = 60;    // change a property from one place
//   alert(clone.sizes.width); // 50, not related

let car={
    name:"bmw",
    color:"red"
};

// let des=Object.getOwnPropertyDescriptor(car,"name");

// console.log(des);

// Object.defineProperty(car,"name",{
//     value:"volvo",

// });


// Object.defineProperty(car,"name",{
//     writable:true
// });


// Object.defineProperties(car,{
//     name:{value:"john",writable:false},
//     color:{value:"red"}
// });

let des=Object.getOwnPropertyDescriptors(car);

console.log(des.name.value);

let car={
    name:"bmw",
    color:"red",

    get carDetails(){
        return `the name of the car is : ${this.name} and the color of the car is : ${this.color}`
    },

    set carDetails(statement){
        [this.name,this.color]=statement.split(" ");
    }
};

car.carDetails="Volvo Blue";

console.log(car.carDetails);

let car={
    name:"bmw",
    color:"red"
};

Object.defineProperty(car,"size",{
    value:"medium"
});

Object.defineProperty(car,"carDetails",{
    get(){
        return(`the car name : ${this.name} and color is ${this.color}`);
    },
    set(statement){
        [this.name,this.color]=statement.split(" ");
    }
});

car.carDetails="Volvo Blue";

console.log(car.carDetails);

let animal={
    name:"animal",
    sleep:true
};

// let dog={
//     bark:true,
//     __proto__:animal
// }

let dog=Object.create(animal);

console.log(Object.getPrototypeOf(dog));

console.log(Object.setPrototypeOf(dog,{}));

console.log(dog.sleep);

class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    toString(){
        return `The name of the user ${this.name} and age is ${this.age}`
    }

}

let user=new User("Vignesh",21);

console.log(""+user);

// console.log(`${user}`);

let user=class User{
    constructor(name){
        this.name=name;
    }
    printData(){
        console.log("the name of the user is : "+this.name);
    }
};

let obj=new user("vignesh");

obj.printData();

class Animal{
    constructor(name){
        this.name=name;
    }
    getName(){
        return `The name of the Animal is ${this.name}`;
    }
}

class Rabit extends Animal{
    constructor(name,age){
        super(name);
        this.age=age;
    }

}

let rabit=new Rabit("white rabbit",10);

console.log(rabit.getName());

let animal={
    name:"vignesh",
    getName(){
       return `the name of the animal is ${this.name}`;
    }
};

let rabbit={
    name:"white rabbit",
    __proto__:animal,
    getName(){
        console.log(this.__proto__.getName.call(this));
    }
};

rabbit.getName();

class Main{
    // static name1="Vignesh";

   
}

class SubClass extends Main{

    constructor(name,age){
        super();
        this.name=name;
        this.age=age;
    }

    printDetail(){
        console.log(`The name of the person is : ${this.name} and the age is ${this.age}`);
    }

    static compare(A,B){
        return B.name-A.name;
    }

}

let obj=[new SubClass("vignesh",21),new SubClass("nisanth",20)];

obj.sort(SubClass.compare);

console.log(obj);

let demo=document.forms;

let str="hello worldskdks";

console.log(str.includes("world"));

*/

export let car={
    name:"bmw"
};

Object.defineProperty(car,"defineName",{
    get(){
        return this.name;
    },
    set(name){
        this.name=name;
    }
});

car.defineName="volvo";

console.log(car.defineName);








