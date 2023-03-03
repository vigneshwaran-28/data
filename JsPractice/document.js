/*

<html> = document.documentElement
The topmost document node is document.documentElement. That’s the DOM node of the <html> tag.

<body> = document.body
Another widely used DOM node is the <body> element – document.body.

<head> = document.head
The <head> tag is available as document.head.

console.log(document.documentElement);

console.log(document.body.childNodes.length);

let arr=document.body.childNodes;

// console.log(arr);



for(let i of arr){
    console.log(i);
}

//Properties firstChild and lastChild give fast access to the first and last children.

console.log(document.body.childNodes[0]===document.body.firstChild);

<body> is said to be the “next” or “right” sibling of <head>,
<head> is said to be the “previous” or “left” sibling of <body>.
The next sibling is in nextSibling property, and the previous one – in previousSibling.

The parent is available as parentNode.

*/

// console.log(document.body.parentNode);


/*

There are two main sets of them:

For all nodes: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
For element nodes only: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.
Some types of DOM elements, e.g. tables, provide additional properties and collections to access their content.

*/

// let txt=document.getElementById('para');
// console.log(txt.innerHTML);

let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    console.log(elem.innerHTML); // "test", "passed"
  }


