'use strict';

module.exports = (sequelize, DataTypes) => {
  const Valoracion = sequelize.define('valoracion', {
    id_valoracion: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_receta: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    id_usuario: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    valoracion: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'valoracion',
    timestamps: false
  });
  Valoracion.associate = function(models) {
    Valoracion.belongsTo(models.receta, {
      foreignKey: 'id_receta',
      as: 'receta'
    });
    Valoracion.belongsTo(models.usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });
  };
  return Valoracion;
}