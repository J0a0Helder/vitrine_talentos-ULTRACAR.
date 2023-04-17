const { Clientes } = require('../../database/models');

const getAllClients = async () => {  
  const clients = await Clientes.findAll();
  return clients;
};

module.exports = {
  getAllClients,
};