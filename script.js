function mostrarCarta() {
  const sobre = document.getElementById('sobre');
  const sello = document.querySelector('.btn-sello');

  // Abre el sobre
  sobre.classList.add('abierto');

  // Aplica animación de giro al sello
  sello.classList.add('girando');

  // Elimina la clase después de la animación para permitir futuros giros
  setTimeout(() => {
    sello.classList.remove('girando');
  }, 600); // Duración de la animación en milisegundos
}

function ocultarCarta() {
  const sobre = document.getElementById('sobre');
  sobre.classList.remove('abierto');
}
