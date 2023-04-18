const employeesService = require('../services/employeesService');

const getAll = async (_req, res) => {
  const employees = await employeesService.getAllEmployees();
  return res.status(200).json(employees);
};

const getById = async (req, res) => {
  const { id } = req.params
  const employee = await employeesService.getEmployeeById(id);
  return res.status(200).json(employee);
};

module.exports = { getAll, getById };