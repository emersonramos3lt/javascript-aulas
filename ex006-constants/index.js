// const = uma variavel que não pode ser mudada

const pi = 3.14159;
let radius;
let circumference;


document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myh3").textContent = circumference;
}