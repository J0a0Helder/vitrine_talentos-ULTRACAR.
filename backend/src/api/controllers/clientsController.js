const clientsServie = require('../services/clientsService');

const getAllClients = async (_req, res) => {
  const clients = await clientsServie.getAllClients();
  return res.status(200).json(clients);
};

module.exports = { getAllClients };