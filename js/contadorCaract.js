document.addEventListener('DOMContentLoaded', function () {
    contadorCaracteres();
})

function contadorCaracteres() {
    const mensaje = document.getElementById('mensaje')

    mensaje.addEventListener('input', function() {
        const caracteres = this.value.length;
        document.getElementById('contadorCaracteres').innerText = caracteres;
    });
}