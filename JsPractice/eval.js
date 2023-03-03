/*

The built-in eval function allows to execute a string of code.

The syntax is:

let result = eval(code);

*/

// eval(" x=10;console.log('hi')");
// console.log(x);

/*

If eval’ed code doesn’t use outer variables, please call eval as window.eval(...):

This way the code is executed in the global scope:

let x = 1;
{
  let x = 5;
  window.eval('alert(x)'); // 1 (global variable)
}

If eval’ed code needs local variables, change eval to new Function and pass them as arguments:

let f = new Function('a', 'alert(a)');

f(5); // 5

*/


/*

ReferenceType:
let user = {
  name: "John",
  hi() { alert(this.name); }
};

// split getting and calling the method in two lines
let hi = user.hi;
hi(); // Error, because this is undefined

*/
let target={};
let proxy=new Proxy(target,{});
proxy.a=10;
console.log(target);
proxy.a=38;
console.log(target);

