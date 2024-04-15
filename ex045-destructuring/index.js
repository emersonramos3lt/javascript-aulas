// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way

// [] = to perfrom array destructuring
// {} = to perform object destructuring

// 5 examples

// EXAMPLE 1
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // a = 2
console.log(b); // b = 1

// EXAMPLE 2
// SWAP 2 ELEMENTS IN A ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];
// Pegamos a cor da posição 0 (red) e colocamos ela na posição 4
// Pegamos a cor da posição 4 (white) e colocamos ela na posição 0

console.log(colors);

//EXAMPLE 3
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const numbers = ["one", "two", "three", "four", "five"];

const [firstNumber, secondNumber, thirdNumber, ...extraNumbers] = numbers;
// O uso de ...extraNumbers se dá para que os números restantes na const numbers sejam mostrados, na const apenas chamamos do firstNumber (one) para o thirdNumber (three), e deixamos (four) e (five) sem serem declarados, então usamos ...extraNumbers para mostrar  os itens restantes da array.

console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);
console.log(extraNumbers);

// EXAMPLE 4 
// EXTRACT VALUES FROM OBJECTS

/*
const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const {firstName, lastName, age, job="Unemployed"} = person2;
// Se colocarmos no final = person1 irá mostrar os valores dentro de person1, como firstName, lastName, age e job

// Se colocarmos = person2 irá mostrar os valores armazenados dentro de person2, porém se por acaso tiver algum item faltando, como por exemplo na person2 falta "job" este valor irá retornar undefined ou algu valor que colocarmos em job

// Mostra os valores no console
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/

// EXAMPLE 5
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="Unemployed"}) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

displayPerson(person2); // Aqui você define qual const você quer ver o valor se é person1 ou person2