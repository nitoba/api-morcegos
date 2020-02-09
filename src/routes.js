const express = require('express');
const batController = require('./controllers/batController');
const routes = express.Router();

routes.get('/', batController.index);
routes.get('/:id', batController.item);
routes.post('/create', batController.store);

module.exports = routes;