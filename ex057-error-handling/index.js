// Error = An Object that is created to represent a problem that occurs
// Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up ex. close files, close connections, release resources

// Irá dar erro se colocarmos no console.log() do try { } um valor não definido, porém se colocarmos um valor definido, como console.log("Hello") o código será executado, sem mostrar error
/*
try {
    console.log("Hello");
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}

catch(error) {
    console.error(error);
}

finally {   
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always execute");
}

console.log("You have reached the end"); // Está mensagem irá aparecer quando o try {} e catch {} mostrar o error
*/

try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0) {
        throw new Error("You can't divide by zero");
    } // Caso seja colocado 0, irá mostrar uma mensagem de error

    if(isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be a number");
    } // Caso não seja um number

    const result = dividend / divisor;
    console.log(result);
}

catch(error) {
    console.error(error); // catch { } é necessário para se usar try { }
}

console.log("You have reached the end"); // Mesmo que haja um error o resto do código irá ocorrer