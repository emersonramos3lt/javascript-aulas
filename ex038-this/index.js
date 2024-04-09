// this = reference to the object where THIS is used (the object depends on the immediate context)

// person.name = this.name

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi I am ${this.name}`)}
} // Se usar apenas name sem o THIS name não irá funcionar

person1.sayHello();

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function() {console.log(`Hi I am ${this.name}`)}
}

person2.sayHello();

// Está função não funciona com arrow functions => Ela irá imprimir undefined