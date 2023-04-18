const salesService = require('../services/salesService');

const create = async (req, res) => {
  console.log(req.body);
  const sale = await salesService.createNewSale(req.body);
  return res.status(201).json(sale);
};

const getAll = async (_req, res) => {
  const sales = await salesService.getAllSales();
  return res.status(200).json(sales);
};

module.exports = { create, getAll };