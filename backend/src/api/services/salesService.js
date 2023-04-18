const { Servicos } = require('../../database/models');

const createNewSale = async ({ total, colaboradorId, clienteId }) => {  
  const iniciadoEm = Date.now();

  const newService = {
    colaboradorId,
    clienteId,
    iniciadoEm,
    total: Number(total),
  };

  const allEmployees = await Servicos.create(newService);
  return allEmployees;
};

const getSaleById = async (id) => {  
  const sale = await Servicos.findOne({ where: {id} });
  return sale;
};

const finishSale = async ({ total, finalizadoEm }, id) => {
  const sale = await Servicos.update({ total, finalizadoEm }, { where: { id } }); 
  return sale;
};

module.exports = {
  createNewSale,
  finishSale,
  getSaleById,
};