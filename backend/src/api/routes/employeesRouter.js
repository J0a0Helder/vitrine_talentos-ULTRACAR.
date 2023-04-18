const express = require('express');
const employeesController = require('../controllers/employeesController');

const employeesRouter = express.Router();

employeesRouter.get('/', employeesController.getAll);
employeesRouter.get('/:id', employeesController.getById);

module.exports = employeesRouter;