const salesService = require('../services/salesService');

const create = async (req, res) => {
  const sale = await salesService.createNewSale(req.body);
  return res.status(201).json(sale);
};

module.exports = { create };