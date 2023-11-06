// Definimos las credenciales de autenticación
const username = 'info@sigilocol.com';
const accessKey = 'MjJlNDMzYzQtN2QwMi00MjkyLTljYjQtOTUzY2Y1ZTEzMjg5OjRWKTM8Lk4sZUg=';

// Creamos una función para obtener el token de autenticación
async function getToken() {
  const response = await fetch('https://api.siigo.com/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      access_key: accessKey
    })
  });
  
  const data = await response.json();
  return data.access_token;
}

// Creamos una función para obtener los productos de Siigo
async function getProductosSiigo() {
  // Obtenemos el token de autenticación
  const token = await getToken();

  // Realizamos la solicitud GET a la URL de productos de Siigo
  const response = await fetch('https://api.siigo.com/v1/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });

  // Obtenemos la respuesta y la convertimos a formato JSON
  const data = await response.json();

  // Mostramos los productos en la consola
  console.log(data);
}

// Llamamos a la función para obtener los productos de Siigo
getProductosSiigo();
