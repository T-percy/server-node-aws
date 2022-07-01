const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');


const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.listen(config.port, () => {
    console.log("Listening port: ", config.port);
});