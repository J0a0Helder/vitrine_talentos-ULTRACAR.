const { Clientes } = require('../../database/models');

const getAllClients = async () => {  
  const clients = await Clientes.findAll();
  return clients;
};

const getClientById = async (id) => {  
  const client = await Clientes.findOne({ where: {id} });
  return client;
};

module.exports = {
  getAllClients,
  getClientById
};