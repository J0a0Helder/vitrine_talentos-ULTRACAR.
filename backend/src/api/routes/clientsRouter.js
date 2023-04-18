const express = require('express');
const clientsController = require('../controllers/clientsController');

const clientsRouter = express.Router();

clientsRouter.get('/', clientsController.getAll);
clientsRouter.get('/:id', clientsController.getById);

module.exports = clientsRouter;