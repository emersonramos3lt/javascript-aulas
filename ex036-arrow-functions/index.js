// arrow functions = a concise way to write function expressions good for simple functions that you use only once (parameters) => some code

/*
const hello = function() {
    console.log("Hello");
}

hello();
*/

/*
const hello = (name, age) => {console.log(`Hello ${name}`)
                        console.log(`You are ${age} years old`)};

hello("Emerson", 18);
*/

//setTimeout( () => console.log("Hello"), 3000);

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);
*/

const prices = [12, 15, 15, 18, 28];

const total = prices.reduce((accumulator, element) => accumulator + element);

console.log(total);