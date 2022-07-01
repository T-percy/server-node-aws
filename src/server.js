'use strict';
const express = require('express');
const router = require('./network/routes'); // 1. Import archivo de rutas de capa de red
//const bodyParser = require('body-parser');
const config = require('./config/default');


const server = express();
router(server); // 2. Pasamos el servidor de express al router para que se encargue de crear todas las rutas necesarias

//server.use(bodyParser.urlencoded({ extended: false }));
//server.use(bodyParser.json());

server.listen(config.port, () => {
    console.log("Listening port: ", config.port);
});