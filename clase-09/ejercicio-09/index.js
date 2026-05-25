import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log(`Datos recibidos: ${req.method} ${req.url}`);
  next(); // Pasa el control al siguiente middleware o ruta
});

app.get("/ping", (req, res) => {
    res.send("/pong").status(200)
})

app.use(function(req, res, next) {
  res.status(404)
  res.send("ruta no encontrada")
});

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`)
})