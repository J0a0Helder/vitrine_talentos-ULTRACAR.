const express = require('express');
const clientsController = require('../controllers/clientsController');

const clientsRouter = express.Router();

clientsRouter.get('/', clientsController.getAll);

module.exports = clientsRouter;