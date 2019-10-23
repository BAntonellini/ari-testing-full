// Bibliotecas
const express = require('express');
const routes = require('./routes/');
const path = require('path');
const bodyParser = require('body-parser');

// Crear APP de Express
const app = express();

// Archivos estáticos / vendor
app.use(express.static('public'));

// Set view engine - PUG
app.set('view engine', 'pug');

// Añadir carpeta de vistas
app.set('views', path.join(__dirname, './views'));

// Bodyparser para leer datos del formulario
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', routes());

app.listen(8000);