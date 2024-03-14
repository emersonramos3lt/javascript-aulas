// string methods = allow you to manipulate and work with text (strings)

let userName = "Bro Code";

// console.log(userName.charAt(0)); charAt irá chamar a letra na posição 0, que é B

// console.log(userName.indexOf("o")); Mostra a quantidade da letra "o" em userName, que é 2

// console.log(userName.length); length irá mostrar a quantidade de letras que userName possui

/*
userName = userName.trim(); // Mostra a string  em userName, sem contar conta espaços em brancos.

console.log(userName);
*/

// console.log(userName.toLocaleUpperCase()); // Faz todas as letras ficarem maiúsculas

// console.log(userName.toLowerCase()); // faz todas as letras ficarem minúsculas

// console.log(userName.repeat(3)); Repete a string 3 vez

// console.log(userName.startsWith("B")); Se começar com uma certa letra, número ou espaço retorna true, se não retorna false, depende do que você colocar nos ()

/*
let result = userName.startsWith(" ");
let resultEnd = userName.endsWith(" ");
let resultInclude = userName.includes(" ")

if (result) {
    console.log("Seu nome não pode começar com espaços"); // Podemos colocar endsWith() para analisar a última parte da string.
}

else if (resultEnd) {
    console.log("Seu nome não pode terminar com espaços");
}

else if (resultInclude) {
    console.log("Seu nome inclui espaços entre duas palavras")
}

else {
    console.log(userName);
}
*/

/*
let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", ""); // Tira os -

console.log(phoneNumber);
*/

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.padStart(15, "0"); // Add 3 zeros há phoneNumber, também temos padEnd que adiciona os números ao final.

console.log(phoneNumber);