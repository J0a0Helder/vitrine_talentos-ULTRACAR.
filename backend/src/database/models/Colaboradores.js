const ColaboradoresModel = (sequelize, DataTypes) => {
  const Colaboradores = sequelize.define(
    "Colaboradores",
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

      cargo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    { underscored: true, timestamps: false, tableName: 'colaboradores' }
  );

  return Colaboradores;
};

module.exports = ColaboradoresModel;
