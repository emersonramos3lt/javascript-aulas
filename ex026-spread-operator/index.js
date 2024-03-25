// spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)

/*
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
*/

/*
let username = "Bro Code";
let letters = [...username];

console.log(letters);
*/

let fruits = ["apple", "orange", "banana"];

let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"]; // add eggs e milks

console.log(foods); // Mostra fruits e vegetables, mais eggs e milk, que colocamos em foods