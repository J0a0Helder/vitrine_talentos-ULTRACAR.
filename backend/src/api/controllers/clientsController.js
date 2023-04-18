const clientsServie = require('../services/clientsService');

const getAll = async (_req, res) => {
  const clients = await clientsServie.getAllClients();
  return res.status(200).json(clients);
};

const getById = async (req, res) => {
  const { id } = req.params
  const client = await clientsServie.getClientById(id);
  return res.status(200).json(client);
};

module.exports = { getAll, getById };