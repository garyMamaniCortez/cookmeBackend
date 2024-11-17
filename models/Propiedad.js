'use strict';

module.exports = (sequelize, DataTypes) => {
  const Propiedad = sequelize.define('propiedad', {
    id_propiedad: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre_propiedad: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    tableName: 'propiedad',
    timestamps: false
  });
  return Propiedad;
}