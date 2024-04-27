// DOM = DOCUMENT OBJECT MODEL
// Object{} that represents the page you see in the web browser and provides you with an API to interact with it. web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation. JavaScript can acess the DOM to dynamically change the content, structure, and style of a web page.

// console.log(document); // Mostra document

/*
document.title = "My website";
document.body.style.backgroundColor = "#111"
console.log(document);
*/

const username = "Emerson";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;