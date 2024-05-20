// Promise = An Object that manages asynchronous operations. Wrap a Promise Object around {asynchronous code} "I promise to return a value"
// PENDING -> RESOLVED OR REJECTED
// new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog() {
    

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if(dogwalked) {
                resolve("You walk the dog");
            } // TRUE

            else {
                reject("You DIDN'T  walk the dog")
            } // FALSE

    }, 1500);
    });
}

function cleanKitchen() {
    

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true; 

            if(kitchenCleaned) {
                resolve("You clean the kitchen");
            } // TRUE

            else {
                reject("You DIDN'T clean the kitchen");
            } // FALSE
       
    }, 2500);
    });
}

function takeOutTrash() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakeOut = true;

            if(trashTakeOut) {
                resolve("You take out the trash");
            } // TRUE

            else {
                reject("You DIDN'T take out the trash")
            } // FALSE

        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log("You finished all the chores")})
        .catch(error => console.error(error)) // Caso um elemento seja false, ele irá mostrar um error
