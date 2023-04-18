const { Servicos, Clientes, Colaboradores } = require('../../database/models');

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

const getAllSales = async () => {
  const sales = await Clientes.findAll(
    {
      include: [
        {
          model: Colaboradores,
          as: 'colaboradores',
          attributes: { exclude: ['id', 'cargo'] },
        },
      ],
    },
  );
  return sales;
};

module.exports = {
  createNewSale,
  getAllSales,
};