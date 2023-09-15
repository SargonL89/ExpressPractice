const express = require('express');
const app = express();

const routerPlacasVideo = require('./routers.js');

app.use('/api/placas-de-video', routerPlacasVideo);

app.get('/', (req, res) => {
    res.status(200).send('Tienda online del Localhost3000');
});


const puerto = process.env.port || 3000;

app.listen(puerto, () => {
    console.log(`El servidor está escuchando en el puerto ${puerto}`);
});
