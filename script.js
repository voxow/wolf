document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('form-message');

    // Simula guardar el correo en una base de datos (necesitarás un backend para esto en producción)
    if (email) {
        message.textContent = `¡Gracias por suscribirte, ${email}!`;
        message.style.color = '#fff';
        document.getElementById('email').value = ''; // Limpia el campo de entrada
    } else {
        message.textContent = 'Por favor, ingresa un correo electrónico válido.';
    }
});