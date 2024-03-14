// IF STATEMENTS = if a condition is true, execute some code if not, do something else

/*
let age = 25;

if (age >= 18) {
    console.log("You are old enough to enter this site");
}

else {
    console.log("You must be 18+ to enter this site");
}
*/

/*
let time = 14;

if(time < 12) {
    console.log("Good morning!");
}

else {
    console.log("Good afternoon");
}
*/

/*
let isStudent = true;

if(isStudent) {
    console.log("You are a student!")
}

else {
    console.log("You are NOT a student!")
}
*/

/*
let age = 25;
let hasLicense = true;

if (age >= 18) {
    console.log("You are old enough to drive");

    if(hasLicense) {
        console.log("You have your license")
    }

    else {
        console.log("You do not have your license yet!")
    }
}

else {
    console.log("You must be 18+ to have a license");
}
*/

const text = document.getElementById("age");
const submit = document.getElementById("submit")
const result = document.getElementById("result")
let age;

submit.onclick = function() {
    age = text.value
    age = Number(age)
    if (age >= 100) {
        result.textContent = `Você é muito velho para acessar este site`
    }

    else if (age == 0) {
        result.textContent = `Você ainda é muito novo`
    }

    else if (age >= 18) {
        result.textContent = `Você pode acessar este site`
    }

    else if (age < 0) {
        result.textContent = `Sua idade não pode ser abaixo de 0`
    }

    else {
        result.textContent = `Você tem que ter mais de 18+`
    }
}