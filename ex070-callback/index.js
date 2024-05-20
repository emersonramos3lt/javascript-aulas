// Callback Hell = Situation in JavaScript where callbacks are nested with others callbacks to the degree where the code is difficult to read. Old pattern to handle asynchronous functions. Use Promises + async/await to avoid Callback Hell

function task1(Callback) {
    setTimeout(() => {
        console.log("Task 1 complete");
        Callback();
    }, 2000);
    
}

function task2(Callback) {
    setTimeout(() => {
        console.log("Task 2 complete");
        Callback();
    }, 1000);
    
}

function task3(Callback) {
    setTimeout(() => {
        console.log("Task 3 complete");
        Callback();
    }, 3000);
    
}

function task4(Callback) {
    setTimeout(() => {
        console.log("Task 4 complete");
        Callback();
    }, 1500);
    
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => console.log("All tasks completed"))
            });
        });
    });
});