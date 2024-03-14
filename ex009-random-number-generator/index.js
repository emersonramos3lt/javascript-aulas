// RANDOM NUMBER GENERATOR
/*
const min = 50;
const max = 100; // Vamos usar no random no lugar de números.

let randomNum = Math.floor(Math.random() * (max - min)) + min; // 1 é o minimo, ele não mostra o 0, o floor é usado para mostrar o número inteiro

console.log(randomNum);
*/

const myButton = document.getElementById("mybutton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}