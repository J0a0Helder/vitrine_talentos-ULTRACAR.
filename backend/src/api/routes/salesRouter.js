const express = require('express');
const salesController = require('../controllers/salesController');

const salesRouter = express.Router();

salesRouter.post('/', salesController.create);
salesRouter.get('/:id', salesController.getById);
salesRouter.put('/:id', salesController.finishSale);

module.exports = salesRouter;