'use strict';

module.exports = (sequelize, DataTypes) => {
  const Valoracion = sequelize.define('Valoracion', {
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
    tableName: 'Valoracion',
    timestamps: false
  });
  Valoracion.associate = function(models) {
    Valoracion.belongsTo(models.Receta, {
      foreignKey: 'id_receta'
    });
    Valoracion.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario'
    });
  };
  return Valoracion;
}
