document.addEventListener('DOMContentLoaded', function () {
    
    contarVisita();
})

function contarVisita() {
    // Obtiene el contador actual o inicia en 0 si no existe
    let visitas = localStorage.getItem('contadorVisitas');
    visitas = visitas ? parseInt(visitas) : 0;

    // Incrementa el contador
    visitas += 1;

    // Guarda el nuevo valor en localStorage
    localStorage.setItem('contadorVisitas', visitas);

    // Muestra el contador en el HTML
    document.getElementById('contadorVisitas').innerText = `Visitas: ${visitas}`;
}

contarVisita();