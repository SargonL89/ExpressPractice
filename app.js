const express = require('express');
const app = express();

const placas = require('./baseDatos.js');
placas()
.then(data => {
    console.log("Datos de las tarjetas gráficas:", data);
    })
.catch(error => {
    console.error("Ocurrió un error al obtener los datos:", error)
});


app.get('/', (req, res) => {
    res.status(200).send('Hello, world!');
});

const puerto = 3000;

app.listen(puerto, () => {
    console.log(`El servidor está escuchando en el puerto ${puerto}`);
});

