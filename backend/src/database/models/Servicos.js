const ServicosModel = (sequelize, DataTypes) => {
  const Servicos = sequelize.define(
    "Servicos",
    {
      total: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },

      iniciadoEm: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "iniciado_em",
      },

      finalizadoEm: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "finalizado_em",
      },
    },
    { underscored: true, timestamps: false, tableName: 'servicos' }
  );

  Servicos.associate = (models) => {
    models.Colaboradores.belongsToMany(models.Clientes, {
      as: "clientes",
      through: Servicos,
      foreignKey: "colaboradorId",
      otherKey: "clienteId",
    });
    models.Clientes.belongsToMany(models.Colaboradores, {
      as: "colaboradores",
      through: Servicos,
      foreignKey: "clienteId",
      otherKey: "colaboradorId",
    });
  };

  return Servicos;
};

module.exports = ServicosModel;
