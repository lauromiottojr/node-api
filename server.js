const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Inciando o APP
const app = express();
app.use(express.json());
app.use(cors()); // libera acesso para todos os domínios, não somente local

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);