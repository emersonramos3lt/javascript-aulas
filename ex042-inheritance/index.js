 // inheritance = allows a new class to inherit properties and methods from an existing class (parents -> child) helps with code reusability

/*
class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";

    run() {
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal {
    name = "fish";
    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal {
    name = "hawk";
    fly() {
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive)
hawk.eat();
hawk.sleep();
hawk.fly();
*/

/*
class Car {
    fuel = true;
    ready() {
        console.log(`This ${this.name} is ready for travel`);
    }
}

class Car1 extends Car {
    name = "Car1";
}

class Car2 extends Car {
    name = "Car2";
}

const car1 = new Car1(); // Cria car1
const car2 = new Car2();

console.log(car1.fuel);
console.log(car2.fuel);

car1.ready();
car2.ready();
*/

class Car {
    fuel = true;
    ready() {
        console.log(`This ${this.name} is ready for travel`);
    }
}

class Camaro extends Car {
    name = "Camaro";
}

const camaro = new Camaro();

console.log(camaro.fuel);
camaro.ready();