// object = A collection of related properties and/or methods Can represent real world objects (people, products, places) 

// object = {key:value, function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
    eat: () => {console.log("I am eating a Krabby Patty")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => {console.log("Hey, I'm Patrick...")}, // Podemos usar => no lugar de function
    eat: () => {console.log("I am eating roast beef, chicken and pizza")}
}

// Cada objeto deve ter um nome diferente. Então aqui colocamos person1 e person2

console.log(person1.firstName); // Irá apenas chamar o valor em person1

console.log(person2.firstName) // Chama o valor em person2

// Irá chamar o texto da function
person1.sayHello(); 
person2.sayHello();

person1.eat();
person2.eat();