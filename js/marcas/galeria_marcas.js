const cardsContainer = document.querySelector('.cards-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const cardsToShow = 1; // Número de tarjetas visibles
const cardWidth = 270; // Ancho de cada tarjeta + márgenes (ajusta según el diseño)

nextButton.addEventListener('click', () => {
    const maxIndex = Math.ceil(cardsContainer.children.length / cardsToShow) - 1;
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateGallery();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
});

function updateGallery() {
    const offset = -(currentIndex * cardWidth * cardsToShow);
    cardsContainer.style.transform = `translateX(${offset}px)`;
}
