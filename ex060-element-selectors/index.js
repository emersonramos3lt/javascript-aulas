// element selectors = Methods used to target and manipulate HTML elements they allow you to select one or multiple HTML elements from the DOM (Document Object Model)

// 1. document.getElementById() // ELEMENT OR NULL
// 2. document.getElementsClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector() // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll() // NODELIST


const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);
// Colocamos estilos no <h1> usando JS

const fruits = document.getElementsByClassName("fruits");

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow"
}); // Colocamos "yellow em todos os elementos da array mesmo que o for



for (let fruit of fruits) {
    fruit.style.backgroundColor = "yellow"; // Aqui colocamos um style em todas os itens dentro de "fruits"
}


// fruits[0].style.backgroundColor = "yellow"; // Selecionamos o item 0 da class fruits, e colocamos um style

// console.log(fruits); // Mostrará as divs com está class em nosso HTML

// getElementByTagName

const h2Elements = document.getElementsByTagName("h2");

for(let h2Element of h2Elements) {
    h2Element.style.backgroundColor = "yellow";
} // Mexe com todos os h2


// Irá selecionar todos os p
const text = document.querySelectorAll("p");

text.forEach(texto => {
    texto.style.textAlign = "center"
});