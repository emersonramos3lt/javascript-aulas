// super = keyword is used in classes to call the constructor or acess the properties and methods of a parent (superclass)
// this = this object
// super = the parent

/*
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        consolee.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`This ${this.name} can run`);
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age); 
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

console.log(rabbit.name); // Saída: rabbit
console.log(rabbit.age); // Saída: 1
console.log(rabbit.runSpeed);
*/

/*
class People {
    constructor(name, age, income) {
        this.name = name;
        this.age = age;
        this.income = income;
    }

    display() {
        console.log(`${person1.name}, ${person1.age}, ${person1.income}`);
    }
}

class Person1 extends People {
   constructor(name, age, income) {
    super(name, age, income);
   }
}

const person1 = new Person1("Walter", 27, 1500);

person1.display();
*/

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Person extends People {
    constructor(name, age) {
        super(name, age);
    }
}

const person = new Person("Emerson", 18);

console.log(person.name);
console.log(person.age);