const { Colaboradores } = require('../../database/models');

const getAllEmployees = async () => {  
  const allEmployees = await Colaboradores.findAll();
  return allEmployees;
};

const getEmployeeById = async (id) => {  
  const employee = await Colaboradores.findOne({ where: {id} });
  return employee;
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
};