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


const routerPlacasVideo = express.Router();
app.use('/api/placas-de-video', routerPlacasVideo);


app.get('/', (req, res) => {
    res.status(200).send('Tienda online del Localhost3000');
});

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


const puerto = process.env.port || 3000;

app.listen(puerto, () => {
    console.log(`El servidor está escuchando en el puerto ${puerto}`);
});
