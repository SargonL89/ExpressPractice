const express = require('express');


let placasVideo = '';
const placas = require('./baseDatos.js');
placas()
.then(data => {
    placasVideo = data
})
.catch(error => {
    console.error("Ocurrió un error al obtener los datos:", error)
});


const routerPlacasVideo = express.Router();
routerPlacasVideo.use(express.json());

routerPlacasVideo.get('/', (req, res) => {    
    if (req.query.ordenar === 'precio') {
        res.status(200).send(placasVideo.sort((a, b) => a.precio - b.precio))
    } else {
        res.status(200).send(placasVideo);
    }
});

routerPlacasVideo.get('/:fabricante', (req, res) =>
{
const manufacturer = req.params.fabricante;
const filtrado = placasVideo.filter((nombre) => nombre.fabricante === manufacturer);

return res.status(200).send(filtrado);
});

routerPlacasVideo.post('/', (req, res) => {
    let nuevaPlaca = req.body;
    placasVideo.push(nuevaPlaca);
    res.send(placasVideo)
});

module.exports = routerPlacasVideo