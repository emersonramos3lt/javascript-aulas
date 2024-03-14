// type conversion = change the datayype of a value to another (strings, numbers, boolens)

/*
let age = window.prompt("How old are you?");
age = Number(age); // Converte para número
age += 1;

console.log(age, typeof age); // typeof mostra o tipo
*/

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x); // Converte a número, string e boolean
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);