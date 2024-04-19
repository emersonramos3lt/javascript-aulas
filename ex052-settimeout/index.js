// setTimeout() = function in JavaScript that allows you to schedule the execution of a function after an amount of time (milliseconds) 

// Times are approximate (varies based on the workload of the JavaScript runtime env.)

// setTimeout(callback, delay);

/*
function sayHello() {
    window.alert("Hello");
}

setTimeout(sayHello, 1000); // Primeiro o nome da função e depois o tempo em que está ação irá ocorrer
*/

/*
setTimeout(function(){window.alert("Hello")}, 1000); // Está é uma outra maneira de fazer o código ocorrer, por meio de uma função anónima
*/

// Usando uma =>

/*
const timeoutId = setTimeout(() => window.alert("Hello"), 1000);

clearTimeout(timeoutId); // Irá cancelar o setTimeout
*/

let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 1000);
    console.log("STARTER")
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log("CLEARED")
}