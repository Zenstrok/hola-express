const express = require('express');

const app = express();
const PUERTO = 3000;

app.get('/', (req, res) => {
	res.send('Hello World desde Express');
});

app.listen(PUERTO, () => {
	console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
