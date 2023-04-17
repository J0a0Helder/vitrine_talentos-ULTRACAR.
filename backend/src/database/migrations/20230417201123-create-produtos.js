'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
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

      preco: {
        allowNull: false,
        type: Sequelize.DECIMAL(5,2),
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('produtos');
  }
};
