'use strict';

module.exports = (sequelize, DataTypes) => {
  const Historial_Busqueda = sequelize.define('historial_busqueda', {
    id_historial_busqueda: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_usuario: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_receta: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    busqueda: {
      allowNull: false,
      type: DataTypes.STRING
    },
    fecha: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'historial_busqueda',
    timestamps: false
  });
  Historial_Busqueda.associate = function(models) {
    Historial_Busqueda.belongsTo(models.usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });
    Historial_Busqueda.belongsTo(models.receta, {
      foreignKey: 'id_receta',
      as: 'receta'
    });
  };
  return Historial_Busqueda;
}