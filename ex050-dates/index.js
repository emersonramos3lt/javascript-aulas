// Date objects  Objects that contain values that represent dates and times
// These date objects can be changed and formatted

// Date(year, month, day, hour, minute, second, ms)


// const date = new Date(2024, 0, 1, 2, 3, 4, 5);
// Aqui definimos a data, se deixarmos os () vazios ele irá mostrar a data local

// const date = new Date();

// Irá pegar ano, mês, dia, hora e outras informações sobre a data
/*
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getUTCDate();

console.log(date); // Irá mostrar a data atual
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);
*/

const date = new Date();

// Aqui definimos a data de acordo com os valores que queremos
date.setFullYear(2024);
date.setMonth(3);
date.setDate(15);
date.setHours(13);
date.setMinutes(50);
date.setSeconds(30);

console.log(date);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1) {
    console.log("HAPPY NEW YEAR!");
} // Caso date2 seja maior que date1 ele irá imprimir no console a mensagem