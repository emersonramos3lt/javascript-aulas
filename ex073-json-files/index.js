// JSON = (JavaScript Object Notation) data-interchange format Used for exchaging data between a server and a web application 

// JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object


/*
// Todas estás informações dentro das const foi definida nas pastas .json
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`

const jsonPerson = `{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}`

const jsonPeople = `[{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate","Cooking"]
},

{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
}, 

{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},

{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}
];`

const parseData = JSON.parse(jsonNames);
console.log(parseData); // Mostra os dados, ele irá mostrar os dados apenas do elemento que está dentro de parse()

*/





// ----------------- fetch() -----------------

/*
fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value))
*/ // O fetch faz você poder ver os items dos elementos, porém devido a algumas questões de segurança não é possível usar no Node.JS

// No lugar do fetch() podemos usar o código abaixo
/*
const fs = require('fs').promises;

fs.readFile('names.json') // Nome do arquivo JSON
    .then(data => {
        const value = JSON.parse(data);
        console.log(value);
    }) // É necessário criar um fs na const para ser capaz de acessar o JSON
*/


// ---------- PROMISE com fs ------------------

const fs = require('fs').promises;

fs.readFile('names.json', 'utf8')

    .then(data => {
        const value = JSON.parse(data);
        console.log(value);
    }) 
    
    .catch(error => {
        console.error('Error reading the file', error);
    }); // Caso o arquivo não possa ser acessado