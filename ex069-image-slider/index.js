// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");

let slideIndex = 0; // Slide i´ra ter o valor 0

let intervalId = null;

//initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider); // Chamamos a function initializeSlider()

function initializeSlider() {

    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    } // Definimos um setInterval para os slides trocarem automaticamente
}

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }

    else if (index < 0) {
        slideIndex = slides.length - 1;
    } // Quando chegar na última img ele irá mudar para a primeira img

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide"); // Adicionar a class "displaySlide" que no CSS tem a propriedade "display: block" que fa´ra com que a atual img seja mostrada
}

// Botões
function prevSlide() {
    clearInterval(intervalId); // Caso o botão de voltar seja acionado ele irá parar com o setInterval
    slideIndex--;
    showSlide(slideIndex); // Possibilita você voltar img
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex); // Possibilita você avançar as suas img 
} // I
// Avançar = ++
// Voltar = --