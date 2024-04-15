// nested objects = objects inside of other Objects.
// Allows you to represent more complex data structures Child object is enclosed by a Parent Object

// Person {Address{}, ContactInfo{}}
// ShoppingCart{keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "int. Water"
    }
}

/*
console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]); // Seleciona o 2 elemento da array hobbies
console.log(person.address.city); // se você apenas colocar address, irá mostrar todos os itens dentro de address. Porém você pode escolher um elemento para apenas ele ser mostrado.

// Como neste exemplo, onde você seleciona apenas .city
*/


for(const property in person.address) {
    console.log(person.address[property]);
} // Irá mostrar todos os itens dentro de address







// EXAMPLE 2

class Person {

    constructor(name, age,  ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address); // Usamos ...new Address(...address) para poder conectar a class Address a person.
    }

}

class Address {

    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }

}

// Criar uma novo item, e dar os respectivos valores colocado em Person e Address
const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");

const person2 = new Person("Patrick", 37, "128 Conch St.", "Bikini Bottom", "Int. Waters");

const person3 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Waters");

console.log(person1.name);
console.log(person2.name);
console.log(person3.name);