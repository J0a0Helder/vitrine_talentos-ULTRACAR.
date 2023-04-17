const ClientesModel = (sequelize, DataTypes) => {
  const Clientes = sequelize.define(
    "Clientes",
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

      carro: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      corCarro: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      telefone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    { underscored: true, timestamps: false, tableName: 'clientes' }
  );

  return Clientes;
};

module.exports = ClientesModel;
