// Referencias a los elementos del DOM
const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Mostrar el formulario de registro
document.getElementById('register-link').addEventListener('click', function(event) {
    event.preventDefault();
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'block';
});

// Volver al formulario de inicio de sesión
document.getElementById('login-back-link').addEventListener('click', function(event) {
    event.preventDefault();
    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

// Registrar nuevo usuario
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const phone = document.getElementById('register-phone').value;

    if (localStorage.getItem(email)) {
        alert('El usuario ya está registrado.');
    } else {
        localStorage.setItem(email, JSON.stringify({name: name, password: password, phone: phone}));
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    }
});

// Iniciar sesión
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert('Inicio de sesión exitoso');
        window.location.href = "bienvenido.html"; // Redirige a otra página HTML
    } else {
        alert('Correo electrónico o contraseña incorrectos.');
    }
});

// Funcionalidad de placeholder para iniciar sesión con Google
document.getElementById('google-login').addEventListener('click', function() {
    alert('Funcionalidad de inicio de sesión con Google no implementada.');
    // Aquí puedes agregar la lógica de OAuth
});

// Funcionalidad de placeholder para iniciar sesión con Facebook
document.getElementById('facebook-login').addEventListener('click', function() {
    alert('Funcionalidad de inicio de sesión con Facebook no implementada.');
    // Aquí puedes agregar la lógica de OAuth
});
