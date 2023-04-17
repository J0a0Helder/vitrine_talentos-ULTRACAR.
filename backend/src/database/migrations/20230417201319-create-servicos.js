'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('servicos', {
      colaboradoId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "colaboradores",
          key: "id",
        },
        field: "colaborado_id",
      },

      clienteId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "clientes",
          key: "id",
        },
        field: "cliente_id",
      },

      iniciadoEm: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "iniciado_em",
      },

      finalizadoEm: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "finalizado_em",
      },

      total: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('servicos');
  }
};
