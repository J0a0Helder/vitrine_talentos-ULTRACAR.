const { Colaboradores } = require('../../database/models');

const getAllEmployees = async () => {  
  const allEmployees = await Colaboradores.findAll();
  return allEmployees;
};

module.exports = {
  getAllEmployees,
};