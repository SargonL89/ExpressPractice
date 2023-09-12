const express = require('express');
const app = express();

let placasVideo = '';

const placas = require('./baseDatos.js');
placas()
.then(data => {
    placasVideo = data
})
.catch(error => {
    console.error("Ocurrió un error al obtener los datos:", error)
});


app.get('/', (req, res) => {
    res.status(200).send('Tienda online del Localhost3000');
});

app.get('/api/placas-de-video', (req, res) => {
    res.status(200).send(placasVideo);
});

app.get('/api/placas-de-video/NVIDIA', (req, res) =>
{
    const NVIDIA = placasVideo.filter((nombre) => nombre.fabricante === 'NVIDIA');
    res.status(200).send(NVIDIA);
});

app.get('/api/placas-de-video/AMD', (req, res) =>
{
    const AMD = placasVideo.filter((nombre) => nombre.fabricante === 'AMD');
    res.status(200).send(AMD);
});

app.get('/api/placas-de-video/Asus', (req, res) =>
{
    const Asus = placasVideo.filter((nombre) => nombre.fabricante === 'Asus');
    res.status(200).send(Asus);
});

const puerto = process.env.port || 3000;

app.listen(puerto, () => {
    console.log(`El servidor está escuchando en el puerto ${puerto}`);
});
