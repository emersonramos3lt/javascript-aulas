// sort() = method used to sort elements of an array in place.
// Sorts elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + numbers + symbols) as strings

/*
let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();

console.log(fruits);
*/

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// Irá organizar os números de forma do menor (1) para o maior (10)

numbers.sort((a, b) => a - b);

// Se você quiser mudar do maior (10) para o menor (1) é apenas colocar ao invés de a - b, colocar: b - a

console.log(numbers);


const people = [{name: "Spongebob", age: 30, gpa: 3.0}, {name: "Patrick", age: 37, gpa: 1.5}, {name: "Squidward", age: 51, gpa: 2.5}, {name: "Sandy", age: 27, gpa: 4.0}]

// irá organizar a array pelas pessoas mais com menor idade, até chegar no mais velho
// people.sort((a, b) => a.age - b.age);

// Irá organizar em ordem alfabética
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);