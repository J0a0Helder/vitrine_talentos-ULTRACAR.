const express = require('express');
const employeesController = require('../controllers/employeesController');

const employeesRouter = express.Router();

employeesRouter.get('/', employeesController.getAllEmployees);

module.exports = employeesRouter;