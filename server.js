const express = require('express');
const mongoose = require('mongoose');

// Inciando o APP
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

// Primera rota
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3001);