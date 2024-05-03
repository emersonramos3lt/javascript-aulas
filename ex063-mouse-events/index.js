// eventListener = Listen for specific events to create interactive web pages events: click, mouseover, mouseout
// .addEventListener(event, callback);

/*
const myBox = document.getElementById("myBox");

function changeColor(event) {
    event.target.style.backgroundColor = "tomato"
    event.target.textContent = "OUCH!"
} // Quando for clicado irá mudar o backgroundColor e o texto

myBox.addEventListener("click", changeColor); // Quando myBox for clicado, ele irá chamar a função (changeColor);
*/

// OUTRO JEITO DE FAZER:

// const myBox = document.getElementById("myBox");

/*
myBox.addEventListener("click", function(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!"
});
*/

// Podemos fazer com arrow function 
// EXEMPLO: myBox.addEventListener("click", event => {resto do código});


const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH!";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me";
});