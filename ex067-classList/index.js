// classList = Element property in JavaScript used to interact with an element's list of classes (CSS classes) Allows you to make reusable classes for many elements across youe webpage

// add()
// remove()
// toggle (Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()




/*
const myButton = document.getElementById("myButton");

myButton.classList.add("enabled"); // Add está class há myButton, e podemos colocar .enabled no CSS para customizar o myButton por meio da class .enabled

// myButton.classList.remove("enabled"); Remove a class de myButton
*/





/*
const myButton = document.getElementById("myButton");

myButton.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
}); // Quando o mouse passar por cima do myButton ele irá add a class "hover" que está definida no CSS, com font-weight e box-shadow

myButton.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
}); // Quando o mouse sair sob o myButton, ele irá remover a class "hover", e myButton irá voltar ao seu estado padrão
*/





// ------ USANDO toggle no lugar de add/remove ----

/*
const myButton = document.getElementById("myButton");

// Terá o mesmo efeito do código acima, usando add/remove

// Add se o mouse está sob e remove se ele sair

myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});
*/


// --------- replace() -----------

/*
const myButton = document.getElementById("myButton");

myButton.classList.add("enabled"); // Add class

myButton.addEventListener("click", event => {
    event.target.classList.replace("enabled", "disabled"); // Quando myButton for clicado, ele ira substituir a class "enabled" pela class "disabled"
}); 
*/





// ------- EXEMPLO 2 replace() -----------

/*
const myH1 = document.getElementById("myH1");
const myButton = document.getElementById("myButton");

myH1.classList.add("enabled"); // Add class há H1
myButton.classList.add("enabled"); // add class há button

myButton.addEventListener("click", event => {

    if (event.target.classList.contains("disabled")) {
        event.target.textContent = "Disabled";
    } // Se myButton for clicado ele muda o texto de myButton

    else {
        event.target.classList.replace("enabled", "disabled");
    } // Substitui "enabled por "disabled

}); // O if só ira mostrar o textContent, caso a classList contenha "disabled"
*/