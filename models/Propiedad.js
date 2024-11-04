'use strict';

module.exports = (sequelize, DataTypes) => {
  const Propiedad = sequelize.define('Propiedad', {
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
    tableName: 'Propiedad',
    timestamps: false
  });
  return Propiedad;
}