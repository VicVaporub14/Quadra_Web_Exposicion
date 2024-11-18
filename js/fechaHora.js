document.addEventListener('DOMContentLoaded', function () {
    actualizarFechaHora();
})

function actualizarFechaHora() {
    const fechaHora = new Date(); 
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    const fecha = fechaHora.toLocaleDateString('es-ES', opcionesFecha);
    const hora = fechaHora.toLocaleTimeString('es-ES', opcionesHora);
    
    document.getElementById('fechaHora').innerText = `${fecha} - ${hora}`;
}
  
setInterval(actualizarFechaHora, 1000);