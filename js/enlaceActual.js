document.addEventListener('DOMContentLoaded', function () {
    enlaceActual();
})


function enlaceActual() {
    // Obtener todos los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll('.links a');

    // Obtener la URL actual de la página
    const currentUrl = window.location.href;

    // Iterar sobre los enlaces para encontrar el que coincide con la URL actual
    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
}


