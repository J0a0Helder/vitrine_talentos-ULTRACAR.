'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('clientes', [{
      id: 1,
      nome: 'Maria Cláudia',
      carro: 'Ford Focus',
      cor_carro: 'branco',
      telefone: '(25)99865-4431',
    },
    {
      id: 2,
      nome: 'Maria Cláudia',
      carro: 'Chevrolet Onix',
      cor_carro: 'prata',
      telefone: '(25)99925-6311',
    },
    {
      id: 3,
      nome: 'José Santos',
      carro: 'Volkswagen Gol',
      cor_carro: 'preto',
      telefone: '(25)99898-3231',
    }], { timestamps: false });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};