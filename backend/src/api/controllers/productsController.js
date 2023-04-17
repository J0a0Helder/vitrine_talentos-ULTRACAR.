const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAllProducts();
  return res.status(200).json(products);
};

module.exports = { getAll };