// eventListener = Listen for specific events to create interactive web pages events: keydown, keyup, keypress
// document.addEventListener(event, callbacks);


// const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event => {
    myBox.textContent = "😯"
    myBox.style.backgroundColor = "tomato";
}); // Pressionar a seta para baixo faz ocorrer o addEventListener

document.addEventListener("keyup", event => {
    myBox.textContent = "🙂"
    myBox.style.backgroundColor = "lightblue";
}); // Parar de segurar a seta para baixo, faz com que o item volte a sua origem




const myBox = document.getElementById("myBox");
const moveAmount = 10; // Velocidade do movimento
let x = 0; // Criamos x e y
let y = 0;

document.addEventListener("keydown", event => {

    if (event.key.startsWith("Arrow")) {

        event.preventDefault();

        switch(event.key) { // Controles

        case "ArrowUp":
             y -= moveAmount;
             break;

        case "ArrowDown":
             y += moveAmount;
             break;

        case "ArrowLeft":
            x -= moveAmount;
            break;

        case "ArrowRight":
            x += moveAmount;
            break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left =`${x}px`;
    } 
});