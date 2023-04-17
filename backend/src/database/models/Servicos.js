const ServicosModel = (sequelize, DataTypes) => {
  const Servicos = sequelize.define(
    "Servicos",
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

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

  Servicos.associate = ({ Colaboradores, Clientes }) => {
    Colaboradores.belongsToMany(Clientes, {
      as: "clientes",
      through: Servicos,
      foreignKey: "colaborador_id",
      otherKey: "cliente_id",
    });
    Clientes.belongsToMany(Colaboradores, {
      as: "colaboradores",
      through: Servicos,
      foreignKey: "cliente_id",
      otherKey: "colaborador_id",
    });
  };

  return Servicos;
};

module.exports = ServicosModel;
