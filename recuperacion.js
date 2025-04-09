document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formRecuperacion");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const mensajeExito = document.getElementById("mensajeExito");

  // Validación en tiempo real
  emailInput.addEventListener("input", () => {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      emailError.textContent = "Por favor, ingresa un correo válido.";
    } else {
      emailError.textContent = "";
    }
  });

  // Simulación del envío
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      mensajeExito.style.display = "block";
      form.reset();
    } else {
      emailError.textContent = "El correo no es válido.";
      mensajeExito.style.display = "none";
    }
  });
});
