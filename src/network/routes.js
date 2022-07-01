'use strict';
const user = require('../apiService/user/network'); // 1. Importando archivo de rutas del componente user

const routes = (server) => {   //2. Creamos función que añada todas las rutas
    server.get('/user', user);
};

module.exports = routes;  // 3. Exportamos la funcion de las rutas 