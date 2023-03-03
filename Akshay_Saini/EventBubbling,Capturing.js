/*

true-capturing

false-bubbling



Event Bubbling :
Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an 
event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and 
ancestor elements in the DOM tree until it gets to the root element

Event capturing:
Event capturing is one of two ways to do event propagation in the HTML DOM. In event capturing, an 
event propagates from the outermost element to the target element. It is the opposite of event 
bubbling, where events propagate outwards from the target to the outer elements. Events trickle down 
in event capturing.

For event capturing, we set the handler capture option to true: elem. addEventListener(event, handler, 
true) . By default, it is set to bubbling: false . In the example below, we add click event handlers 
on every HTML element using JavaScript for loop

*/

document.querySelector("#grandparent")
  .addEventListener('click', (e) => {
    console.log("Grandparent Clicked!");
    //e.stopPropagation();
  }, true);

  document.querySelector("#parent")
  .addEventListener('click', (e) => {
    console.log("Parent Clicked!");
  }, true);

  document.querySelector("#child")
  .addEventListener('click', (e) => {
    console.log("Child Clicked!");
  }, true);