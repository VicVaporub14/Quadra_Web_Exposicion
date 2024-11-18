document.addEventListener('DOMContentLoaded', function () {
    // Función para redireccionar a una URL específica
    function redirectTo(url) {
        window.location.href = url;
    }

    // Redirección para los enlaces del navbar
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita la acción por defecto
            const destination = this.getAttribute('href');
            
            // Redireccionar a la URL del atributo href
            if (destination && destination !== '#') {
                redirectTo(destination);
            } else {
                alert('La página solicitada no está disponible.');
            }
        });
    });

    // Redirección para los botones dentro de la clase auto
    const viewButtons = document.querySelectorAll('.auto .container');
    viewButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Aquí puedes definir la URL a la que quieres redirigir para cada botón
            const carTitle = this.closest('.auto').querySelector('h3').textContent;
            
            // Ejemplo: redireccionar basado en el nombre del coche (puedes personalizarlo)
            if (carTitle === 'Nissan Tiida') {
                redirectTo('nissan-tiida.html');
            } else {
                alert('La página del coche solicitado no está disponible.');
            }
        });
    });

    // Redirección para el botón de reservar
    const reserveButton = document.querySelector('.button-container');
    if (reserveButton) {
        reserveButton.addEventListener('click', function () {
            redirectTo('reservar.html'); // Redirige a la página de reserva
        });
    }

    // Función de filtrado
function filterCars() {
    const type = document.getElementById('filter-type').value;
    const passengers = document.getElementById('filter-passengers').value;
    const luggage = document.getElementById('filter-luggage').value;

    // Seleccionar todos los autos
    const cars = document.querySelectorAll('.auto');
    let visibleCarsCount = 0; // Contador para autos visibles

    cars.forEach(car => {
        const carType = car.getAttribute('data-type');
        const carPassengers = car.getAttribute('data-passengers');
        const carLuggage = car.getAttribute('data-luggage');

        // Comparar con los filtros seleccionados
        const matchesType = !type || carType === type;
        const matchesPassengers = !passengers || parseInt(carPassengers) >= parseInt(passengers);
        const matchesLuggage = !luggage || parseInt(carLuggage) >= parseInt(luggage);

        // Mostrar u ocultar el auto
        if (matchesType && matchesPassengers && matchesLuggage) {
            car.style.display = 'block';
            visibleCarsCount++; // Aumentar el contador de autos visibles
        } else {
            car.style.display = 'none';
        }
    });

    // Mostrar mensaje si no hay autos visibles
    const noResultsMessage = document.getElementById('no-results-message');
    if (visibleCarsCount === 0) {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
    }
}

// Función para restablecer los filtros
function resetFilters() {
    document.getElementById('filter-type').value = '';
    document.getElementById('filter-passengers').value = '';
    document.getElementById('filter-luggage').value = '';
    filterCars(); // Aplicar el filtro de nuevo después de restablecer
}

// Evento para el botón de filtrar
document.getElementById('filter-button').addEventListener('click', filterCars);

// Evento para restablecer los filtros al recargar la página
window.addEventListener('load', resetFilters);

});
