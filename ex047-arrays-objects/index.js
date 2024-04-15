
const fruits = [{name: "apple", color: "red", calories: 95}, 
{name: "orange", color: "orange", calories: 45}, 
{name: "banana", color: "yellow", calories: 105}, 
{name: "coconut", color: "white", calories: 159}, 
{name: "pineapple", color: "yellow", calories: 37}];

fruits.push({name: "grapes", color: "purple", calories: 62}) // add um novo item a array "fruits"

// fruits.pop(); // Remove o último elemento da array

// fruits.slice(1, 2); // Extrai os elementos do índice 1 até 2

// console.log(fruits);

/*
console.log(fruits[0].name);
console.log(fruits[0].color);
console.log(fruits[0].calories);
*/

// forEach()

fruits.forEach(fruit => console.log(fruit.name)); // Irá imprimir todos os nomes das fruits

// map()

const fruitNames = fruits.map(fruit => fruit.name); // Irá imprimir todos os nomes

console.log(fruitNames);

// filter()

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow"); // Colocamos um filtro, que irá mostrar apenas arrays da cor "yellow"

const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

console.log(yellowFruits);
console.log(lowCalFruits);

// reduce()

// Se colocarmos maxFruit no console.log() iá mostrar o com maior número de calorias
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

// Mostra o item da array, com a menor quantidade de calorias
const minFruit = fruits.reduce((min , fruit) => fruit.calories < min.calories ? fruit : min);

console.log(maxFruit);
console.log(minFruit);