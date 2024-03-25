// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

// fruits[3] = "coconut"; add "coconut"
//fruits.push("coconut"); Add "coconut"
//fruits.pop(); Remove elementos da lista
// fruits.unshift("mango"); Add "mango" na posição 0
// fruits.shift(); 

/*
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
*/

/*
let numOfFruits = fruits.length; // Conta o número de items dentro da array, que são 3, apple, orange e banana
let index = fruits.indexOf("apple"); // Verifica em qual posição está apple, que está na posição 0

console.log(index);
*/


/*
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
} // Mostra todos os elementos dentro de fruits, usando um loop
*/

fruits.sort().reverse();

// Forma mais curta usando loop
for (let fruit of fruits) {
    console.log(fruit);
} // Mostra todos os itens dentro da array.