'use strict'

module.exports = (sequelize, DataTypes) => {
  const Ingrediente = sequelize.define('ingrediente', {
    id_ingrediente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre_ingrediente: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'ingrediente',
    timestamps: false
  });
  return Ingrediente;
}