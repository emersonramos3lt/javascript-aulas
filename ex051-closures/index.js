// closure = A function defined inside of another function, the inner function has acess to the variables and scope of the outer function.

// Allow for private variables and state maintenance
// Used frequently in JS frameworks: React, Vue, Angular

function outer() {

    let message = "Hello"; // Definimos a message

    function inner() {
        console.log(message); // Imprime a message no console
    }

    inner();
}

outer(); // Por meio do outer() teremos acesso a uma função dentro de outer() que é inner()

/*
function createCounter() {

    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);
*/


function counter() {
    let user = 0;

    function newUser() {
        user++;
        console.log(`New user ${user}`)
    }

    function getUser() {
        return user;
    }

    return {newUser, getUser};
}

const user = counter(); // Aqui criamos user na const para que possamos usar fora da function

// Aqui ele irá chamar a função newUser que conterá o user++ onde irá add mais user
user.newUser(); 
user.newUser();
user.newUser();
user.newUser();

console.log(`Total: ${user.getUser()}`);




// EXEMPLO
function createGame() {

let score = 0;

    function increaseScore(points) {
    score += points; // Acresenta pontos
    console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
    score -= points; // Tira pontos
    console.log(`-${points}pts`);
    }

    function getScore() {
    return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.decreaseScore(3);

console.log(`The final socre is ${getScore()}pts`);