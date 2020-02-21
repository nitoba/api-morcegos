const express = require('express');
const batController = require('./controllers/batController');
const ecoController = require('./controllers/EcoInfoController');
const routes = express.Router();

routes.get('/', batController.index);
routes.get('/bat/:id', batController.item);
routes.post('/create', batController.store);
routes.get('/ecoinfo', ecoController.index);
routes.post('/ecoinfo', ecoController.store);

module.exports = routes;