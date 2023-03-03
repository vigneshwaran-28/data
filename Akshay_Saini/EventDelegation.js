/*

Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event 
listener to each and every similar element, we can add an event listener to a parent element and call 
an event on a particular target using the . target property of the event object.

*/

//code 1

// document.querySelector("#form").addEventListener('keyup', (e) => {
//     console.log(e);
//     if (e.target.dataset.uppercase != undefined) {
//       e.target.value = e.target.value.toUpperCase();
//     }
//   })

document.querySelector("#category").addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.tagName == 'LI') {
      window.location.href = "/" + e.target.id;
    }
  });



