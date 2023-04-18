const salesService = require('../services/salesService');

const create = async (req, res) => {
  const sale = await salesService.createNewSale(req.body);
  return res.status(201).json(sale);
};

const getById = async (req, res) => {
  const { id } = req.params
  const sale = await salesService.getSaleById(id);
  return res.status(200).json(sale);
};

const finishSale = async (req, res) => {
  const { id } = req.params
  const salesFinished = await salesService.finishSale(req.body, id);
  return res.status(200).json(salesFinished);
};

module.exports = { create, finishSale, getById };