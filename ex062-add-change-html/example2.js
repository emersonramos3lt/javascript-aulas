// ---------- EXAMPLE <li> -----------

// STEP 1 CREATE THE ELEMENT 
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen"

// STEP 3 APPEND ELEMENT TO DOM
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

/*
// Colocamos (coconut) entre a banana e orange

const banana = document.getElementById("banana");
document.getElementById("fruits").insertBefore(newListItem, banana); 
*/

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[1]); // Controlamos a posição de newListItem no listItems[]

// REMOVE HTML ELEMENT 
// document.getElementById("fruits").removeChild(newListItem); 


// append() coloca o item criado no final
// prepend() coloca o item criado no topo