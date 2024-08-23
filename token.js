// Credenciales
const username = 'info@sigilocol.com';
const accessKey = 'MjJlNDMzYzQtN2QwMi00MjkyLTljYjQtOTUzY2Y1ZTEzMjg5OjRWKTM8Lk4sZUg=';

// URL de la API de autenticación de Siigo
const apiUrl = 'https://api.siigo.com/auth';

// Elemento HTML donde se mostrará el estado de la conexión
const statusElement = document.getElementById('status');

// Configuración de la solicitud POST
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${username}:${accessKey}`)
    },
    body: JSON.stringify({
        // Si se requiere algún cuerpo adicional en la solicitud, puedes agregarlo aquí
    })
};

// Realizar la solicitud POST
fetch(apiUrl, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta de la API:', data);
        statusElement.textContent = 'CONEXIÓN';  // Mostrar "CONEXIÓN" si todo está bien
    })
    .catch(error => {
        console.error('Error:', error);
        statusElement.textContent = 'ERROR';  // Mostrar "ERROR" si algo falla
    });
