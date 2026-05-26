import express from "express";

const app = express();

app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`)
    next();
})

app.get("/HTML", (req, res) => {
    res.send("<h1>Bienvenidos a Marte</h1>").status(200)
})

app.get("/JSON", (req, res) => {
    res.send({
        usuarios: [
            {nombre: "Nicolas", edad: 24},
            {nombre: "Cristian", edad: 26}
        ]
    }).status(200)
})

app.use(function(req, res, next) {
    res.status(404)
    res.send("Ruta No Encontrada")
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost: ${PORT}`)
})