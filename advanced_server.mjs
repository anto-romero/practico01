import http from "http";
import url from "url";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;
  const method = req.method;

  // Ruta raíz con método GET
  if (pathName === "/" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Página de inicio\n");

    // Ruta '/data' con método GET
  } else if (pathName === "/data" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Acerca de nosotros\n");

    // Ruta '/data' con método POST
  } else if (pathName === "/data" && method === "POST") {
    let body = "";

    // Recibir datos del cuerpo de la solicitud
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // Finalizar recepción de datos y enviar respuesta
    req.on("end", () => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(`Datos recibidos: ${body}\n`);
    });

    // Ruta no encontrada
  } else {
    res.statusCode = 404;
    res.end("Ruta no encontrada\n");
  }
});

// El servidor comienza a escuchar en el puerto especificado
server.listen(port, hostname, () => {
  console.log(`El servidor corriendo en http://${hostname}:${port}`);
});
