'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      carro: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      corCarro: {
        allowNull: false,
        type: Sequelize.STRING,
        field: "cor_carro",
      },

      telefone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('clientes');
  }
};
