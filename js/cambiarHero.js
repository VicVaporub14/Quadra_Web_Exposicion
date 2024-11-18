document.addEventListener('DOMContentLoaded', function () {
    cambiarHero();
});

function cambiarHero() {
    // Lista de URLs de las imágenes de fondo
    const imagenesFondo = [
        'url("../imgs/heros/hero-4.avif")',
        'url("../imgs/heros/hero-5.avif")',
        'url("../imgs/heros/hero-2.jpg")',
        'url("../imgs/heros/hero-6.webp")'
    ];

    let indiceActual = 0;

    
    function cambiarFondo() {
        
        const hero = document.querySelector('.hero');
        hero.style.backgroundImage = imagenesFondo[indiceActual];
    
        indiceActual = (indiceActual + 1) % imagenesFondo.length;
    }

    setInterval(cambiarFondo, 7000);

}