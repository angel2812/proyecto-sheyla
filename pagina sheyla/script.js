document.addEventListener("DOMContentLoaded", function () {
  const contadorBtn = document.getElementById("contadorBtn");
  const contadorClics = document.getElementById("contadorClics");

  let numeroClics = 0;

  contadorBtn.addEventListener("click", function () {
    // Incrementar el contador de clics
    numeroClics++;

    // Actualizar el contenido del contador
    contadorClics.textContent = `descargas: ${numeroClics}`;
  });
});