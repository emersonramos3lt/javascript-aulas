// NodeList = Static collection of HTML elements by (id, class, element) Can be created by using querySelectorAll()

// Similar to an array, but no (map, filter, reduce)
// NodeList wont't update to automatically reflect changes

/*
let buttons = document.querySelectorAll(".myButtons");

console.log(buttons); // Será mostrado a nossa NodeList, com todos os itens que tem a class (myButtons)
*/


/*
let buttons = document.querySelectorAll(".myButtons");

// ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😀" 
}); // no textContent colocarmos (=) ele irá substituir o atual texto. Porém se colocarmos (+=) esse texto será inclementado junto do texto padrão
*/


/*
let buttons = document.querySelectorAll(".myButtons");

// CLICK event listener .addEventListener()

buttons.forEach(button => {
button.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato"
});
});
*/


/*
let buttons = document.querySelectorAll(".myButtons");

// MOUSEOVER + MOUSEOUT event listener

buttons.forEach(button => {
   button.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
   });
}); // Quando o mouse passar sobre o botão ele muda de cor

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%"
    });
}); // Quando o mouse sair sobre o botão ele muda de cor
*/


/*
let buttons = document.querySelectorAll(".myButtons");

// ADD AN ELEMENT

const newButton = document.createElement("button"); // STEP 1

newButton.textContent = "Button 5" // STEP 2

newButton.classList = "myButtons";

document.body.appendChild(newButton); // STEP 3

buttons = document.querySelectorAll(".myButtons");

console.log(buttons); // Como NodeList é estático, precisamos adicionar manualmente o botão a nossa lista, usando outra querySelectorAll()
*/

let buttons = document.querySelectorAll(".myButtons");

// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();

        // Outro
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
}); // Sempre que clicar em um elemento ele irá ser removido