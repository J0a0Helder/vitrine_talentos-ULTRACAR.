const express = require('express');
const salesController = require('../controllers/salesController');

const salesRouter = express.Router();

salesRouter.post('/', salesController.create);
salesRouter.get('/', salesController.getAll)

module.exports = salesRouter;