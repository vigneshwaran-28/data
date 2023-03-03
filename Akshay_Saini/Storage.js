/*

Local Storage:
LocalStorage is a data storage type of web storage. This allows the JavaScript sites and apps to store 
and access the data without any expiration date. This means that the data will always be persisted and 
will not expire. So, data stored in the browser will be available even after closing the browser 
window.

*/

localStorage.setItem("Vignesh","hi");

/*

setItem()	This method is used to add the data through key and value to localStorage.
getItem()	It is used to fetch or retrieve the value from the storage using the key.
removeItem()	It removes an item from storage by using the key.
clear()	It is used to gets clear all the storage.

*/



/*

Session Storage
sessionStorage is similar to localStorage ; the difference is that while data in localStorage doesn't 
expire, data in sessionStorage is cleared when the page session ends. Whenever a document is loaded in 
a particular tab in the browser, a unique page session gets created and assigned to that particular 
tab.

*/