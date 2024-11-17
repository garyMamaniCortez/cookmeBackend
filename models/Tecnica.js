'use strict';

module.exports = (sequelize, DataTypes) => {
  const Tecnica = sequelize.define('tecnica', {
    id_tecnica: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre_tecnica: {
      allowNull: false,
      type: DataTypes.STRING
    },
    descripcion_tecnica: {
      allowNull: false,
      type: DataTypes.STRING
    },
    enlace_tutorial: {
      allowNull: true,
      type: DataTypes.STRING
    }
  }, {
    tableName: 'tecnica',
    timestamps: false
  });
  return Tecnica;
}
