/*

call
if you need to use some functionalities in your code which is already in some other code u just wanted 
to use it to get output then you can just pass the object to the function in which you need to execute 
using call keyword


The call() method is a predefined JavaScript method. It can be used to invoke (call) a method with an 
owner object as an argument (parameter). With call() , an object can use a method belonging to another 
object.


E.g
person.fullName.call(person1);


apply

The apply() method calls the specified function with a given this value, and arguments provided as an 
array (or an array-like object).
E.g
greet.apply(person, ['Hello', 'How are you?']);


bind
With the bind() method, an object can borrow a method from another object.
E.g
let fullName = person.fullName.bind(member);


*/


