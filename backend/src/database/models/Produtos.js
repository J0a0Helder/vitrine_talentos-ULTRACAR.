const ProdutosModel = (sequelize, DataTypes) => {
  const Produtos = sequelize.define(
    "Produtos",
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      preco: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    { underscored: true, timestamps: false, tableName: 'produtos' }
  );

  return Produtos;
};

module.exports = ProdutosModel;
