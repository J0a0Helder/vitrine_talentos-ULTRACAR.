'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('colaboradores', {
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

      cargo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('colaboradores');
  }
};
