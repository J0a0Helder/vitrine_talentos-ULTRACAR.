const clientsServie = require('../services/clientsService');

const getAll = async (_req, res) => {
  const clients = await clientsServie.getAllClients();
  return res.status(200).json(clients);
};

module.exports = { getAll };