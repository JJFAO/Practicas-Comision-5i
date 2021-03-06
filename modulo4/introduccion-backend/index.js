// Importación de módulos de versiones anteriores
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routeUsuarios = require('./routes/usuarios');
const routeAuth = require('./routes/auth');

// crear el servidor
const app = express();

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.rnfxk.mongodb.net/practicabackend?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
);

// Habilitar express.json (tambien se puede usar body parser)
app.use(express.json({ extended: true }));

//importar rutas
app.use('/api/usuarios', routeUsuarios);
app.use('/api/auth', routeAuth);

// puerto y arranque del servidor
app.listen(4000, () => {
    console.log('Servidor Funcionando');
});
