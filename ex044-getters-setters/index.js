// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle { // Aqui criamos a class Rectangle
    constructor(width, height) {
        // Criamos width e height que seus números serão colocados na const rectangle = new Rectangle ();
        this.width  = width; 
        this.height = height;
    }

    set width(newWidth) {
        // Caso os números sejam maior que 0 mostrará o resultado normalmente
        if(newWidth > 0) {
            this._width = newWidth.toFixed(1);
        }
        else { // Se não irá mostrar uma mensagem
            console.error("Width must be a positive number")
        }
    }

    set height(newHeight) {
        // Mesma coisa que width
        if(newHeight > 0) {
            this._height = newHeight.toFixed(1);
        }

        else {
            console.error("Height must be a positive number")
        }
    }

    get width() {
        return this._width;
    } // Precisa para não mostrar undefined

    get height() {
        return this._height;
    }

    get area() { // Calcula a area fazendo multiplicação *
        return (this._width * this._height).toFixed(1);
    }
}

// O uso do toFixed() não é preciso, apenas se usa para se mostrar um 0 após o número exemplo 5.0

const rectangle = new Rectangle (3, 4); // Aqui definimos os valores de width e depois height

// console.log para mostrar os números no console
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);










/*
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if(typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName) {
        if(typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName
        }
        else {
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge) {
        if(typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a non-negative number");
        }
    }

   get firstName() {
    return this._firstName;
   }

   get lastName() {
    return this._lastName;
   }

   get age() {
    return this._age;
   }
}

const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
*/






class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set name(newName) {
        if(typeof newName === "string" && newName.length > 0) {
            this._name = newName;
        }

        else {
            console.error("Nome inválido");
        }
    }

    set age(newAge) {
        if(typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        }

        else {
            console.error("Idade inválida");
        }
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}

const people = new People("Patrick", 30);

console.log(people.name);
console.log(people.age);