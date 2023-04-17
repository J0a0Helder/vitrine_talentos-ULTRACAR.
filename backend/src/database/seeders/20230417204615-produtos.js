"use strict";

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "produtos",
      [
        {
          id: 1,
          nome: "Apenas mão de obra",
          preco: 50.00,
        },
        {
          id: 2,
          nome: "Cera Limpadora",
          preco: 158.59,
        },
        {
          id: 3,
          nome: "Tensor da Correia Dentada",
          preco: 77.9,
        },
        {
          id: 4,
          nome: "Correia Dentada",
          preco: 377.85,
        },
        {
          id: 5,
          nome: "Pastilha de Freio Dianteira",
          preco: 43.90,
        },
      ],
      { timestamps: false }
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
