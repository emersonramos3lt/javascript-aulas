// DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSbling 
// .previousElementSibling
// .parentElement
// .children

// --------- .firstElementChild -----------
/*

const element = document.getElementById("fruits"); // Escolhemos o item

const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow"
// Adicionamos uma cor ao 1 filho, que é o primeiro item

*/

// Neste código pegamos todos o 1 filho de cada ul e colocamos a cor amarela, Para isso usamos querySelectorAll

/*
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow"
});
*/


// ------- .lastElementChild ----------

/*
const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow";
*/

/*
const allElement = document.querySelectorAll("ul");

allElement.forEach(allElements => {
    const lastChild = allElements.lastElementChild;
    lastChild.style.backgroundColor = "yellow"
});
*/


// --------- .nextElementSibling -----------

/*
// Aqui pegamos o irmão de (apple) que seria o proximo item de nossa ul

const element = document.getElementById("apple")
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

// Se colocarmos (fruits) no lugar de (apple) irá selecionar toda a lista de (vegetables)
*/

// ------- .previousElementSibling ---------

/*
// Seleciona o item anterior, o item anterior de (orange) é (apple)

const element = document.getElementById("orange");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";
*/

// ---------- .parentElement ----------

/*
// Seleciona todos os itens que (orange) faz parte


const element = document.getElementById("orange");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";
*/

// -------- .children -----------

/*
const element = document.getElementById("fruits");
const children = element.children;

console.log(children);
*/

const element = document.getElementById("fruits");
const children = element.children;

/*
Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});
*/

children[1].style.backgroundColor = "yellow"


/*
    <ul>
        <li>1 filho</li>
        <li>2 filho</li>
        <li>3 filho</li>
    </ul>

    ul = PAI
    li = FILHO
*/