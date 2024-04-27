// -------- EXAMPLE 1 --------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!"; // texto
newH1.id = "myH1" // Add um id há newH1
newH1.style.color = "tomato";
newH1.style.textAlign = "center"

// STEP 3 APPEND ELEMENT TO DOM

// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").append(newH1); // Add newH1 dentro de box1
// document.getElementById("box2").prepend(newH1);

/*
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2); // Irá add newH1 encima de box2 e no meio de box1
*/

/*
const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[1]); // Escolhemos a posição de newH1 entre as boxes
*/

// REMOVE HTML ELEMENT

document.getElementById("box1").removeChild(newH1); // Removemos newH1 de box1, mas primeiro pegamos o id





// append() faz aparecer o h1 no final
// prepend() faz aparecer o h1 no topo