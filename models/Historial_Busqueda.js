'use strict';

module.exports = (sequelize, DataTypes) => {
  const Historial_Busqueda = sequelize.define('Historial_Busqueda', {
    id_usuario: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    id_receta: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    busqueda: {
      allowNull: false,
      type: DataTypes.STRING
    },
    fecha: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    tableName: 'Historial_Busqueda',
    timestamps: false
  });
  Historial_Busqueda.associate = function(models) {
    Historial_Busqueda.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });
    Historial_Busqueda.belongsTo(models.Receta, {
      foreignKey: 'id_receta',
      as: 'receta'
    });
  };
  return Historial_Busqueda;
}