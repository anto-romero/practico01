// Importamos el módulo 'http' de Node.js
import http from 'http';

// Definimos el hostname y el puerto
const hostname = '127.0.0.1';
const port = 3000;

// Creamos el servidor
const server = http.createServer((req, res) => {
  // Establecemos el código de estado y los headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Enviamos una respuesta al cliente
  res.end('Hola Mundo\n');
});

// El servidor comienza a escuchar en el puerto y hostname especificados
server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});