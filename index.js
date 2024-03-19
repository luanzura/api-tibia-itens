const express = require('express');
const cors = require('cors'); // Importe o pacote CORS

const server = express();
const api = require('./src/data/helmets.json');

// Use o middleware CORS
server.use(cors());

server.get('/api', (req, res) => {
    return res.json(api);
});

server.listen(3000, () => {
    console.log('Servidor Online!');
});
