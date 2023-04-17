const { Servicos } = require('../../database/models');

const createNewSale = async ({ total, colaboradorId, clienteId }) => {  
  const iniciadoEm = Date.now();

  const newService = {
    colaborador_id: Number(colaboradorId),
    cliente_id: Number(clienteId),
    iniciadoEm,
    total: Number(total),
  };

  const allEmployees = await Servicos.create(newService);
  return allEmployees;
};

module.exports = {
  createNewSale,
};