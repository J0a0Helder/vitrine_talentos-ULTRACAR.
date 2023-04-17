const { Produtos } = require('../../database/models');

const getAllProducts = async () => {  
  const allProducts = await Produtos.findAll();
  return allProducts;
};

module.exports = {
  getAllProducts,
};