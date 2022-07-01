'use strict';
const express = require('express'); // 1. Importando express
const controller = require('./controller'); // 5. Importando archivos relacionados.
const response = require('../../network/response');

const router = express.Router(); // 2. Creando router


// 4: Creando las rutas -----------------------------------------------------------------------
router.get('/', (req, res) => {
    response.success(req, res, 'List users');
});

router.post('/', (req, res) => {
    controller.addUser(req.body.user)
        .then(() => {
            response.success(req, res, 'Creado correctamente', 201);
        }).catch(() => {
            response.error(req, res, 'Información invalida', 400, 'Error en el controlador');
        });
});

module.exports = router;  // 3. Exportando router