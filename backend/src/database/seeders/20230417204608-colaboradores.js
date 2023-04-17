'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('colaboradores', [{
      id: 1,
      nome: 'João Hélder',
      cargo: 'Mecânico',
    },
    {
      id: 2,
      nome: 'Emanuel Carlos',
      cargo: 'Auxiliar',
    },
    {
      id: 3,
      nome: 'Patricia Vieira',
      cargo: 'Atendente',
    }], { timestamps: false });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('colaboradores', null, {});
  }
};