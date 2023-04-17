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
        allowNull: false,
        field: "finalizado_em",
      },
    },
    { underscored: true, timestamps: false, tableName: 'servicos' }
  );

  Servicos.associate = ({ Colaboradores, Clientes }) => {
    Colaboradores.belongsToMany(Clientes, {
      as: "clientes",
      through: Servicos,
      foreignKey: "colaborador_id",
      otherKey: "clientes_id",
    });
    Clientes.belongsToMany(Colaboradores, {
      as: "colaboradores",
      through: Servicos,
      foreignKey: "clientes_id",
      otherKey: "colaboradores_id",
    });
  };

  return Servicos;
};

module.exports = ServicosModel;
