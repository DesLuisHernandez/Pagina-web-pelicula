// script.js
let currentIndex = 0; // Índice de la imagen actual
const totalImages = 5; // Número total de imágenes
const carruselContainer = document.querySelector('.carrusel-container');

// Función para mostrar la imagen actual
function showImage(index) {
    const offset = -index * 1920; // Calcula el desplazamiento
    carruselContainer.style.transform = `translateX(${offset}px)`; // Mueve el contenedor
}

// Función para avanzar a la siguiente imagen
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Avanza al siguiente índice
    showImage(currentIndex); // Muestra la imagen
}

// Función para retroceder a la imagen anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Retrocede al índice anterior
    showImage(currentIndex); // Muestra la imagen
}