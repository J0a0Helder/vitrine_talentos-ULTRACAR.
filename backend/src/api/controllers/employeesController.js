const employeesService = require('../services/employeesService');

const getAll = async (_req, res) => {
  const employees = await employeesService.getAllEmployees();
  return res.status(200).json(employees);
};

module.exports = { getAll};