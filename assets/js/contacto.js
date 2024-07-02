document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const mensajeInput = document.getElementById("mensaje");
    const contactReasonSelect = document.getElementById("contact-reason");
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        const mensaje = mensajeInput.value.trim();
        const contactReason = contactReasonSelect.value;
        
        // Resetear los estilos de los campos y los mensajes
        errorMessage.style.display = "none";
        errorMessage.textContent = "";
        successMessage.style.display = "none";
        nombreInput.classList.remove("error");
        emailInput.classList.remove("error");
        mensajeInput.classList.remove("error");
        contactReasonSelect.classList.remove("error");

        // Validaciones
        if (contactReason === "") {
            errorMessage.textContent = "Por favor seleccione el tipo de mensaje.";
            errorMessage.style.display = "block";
            contactReasonSelect.classList.add("error");
            return;
        }

        if (nombre.length < 4 || nombre[0] !== nombre[0].toUpperCase() || /[^a-zA-Z\s]/.test(nombre)) {
            errorMessage.textContent = "El nombre debe tener al menos 4 letras, comenzar con mayúscula y no contener números ni caracteres especiales.";
            errorMessage.style.display = "block";
            nombreInput.classList.add("error");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage.textContent = "Por favor ingrese un correo electrónico válido con '@' y dominio.";
            errorMessage.style.display = "block";
            emailInput.classList.add("error");
            return;
        }

        if (mensaje.length < 20) {
            errorMessage.textContent = "El mensaje debe tener al menos 20 caracteres.";
            errorMessage.style.display = "block";
            mensajeInput.classList.add("error");
            return;
        }

        // Mostrar mensaje de éxito
        successMessage.style.display = "block";
        successMessage.textContent = "¡Mensaje enviado con éxito!";
        
        // Limpiar el formulario
        contactForm.reset();
    });
});
