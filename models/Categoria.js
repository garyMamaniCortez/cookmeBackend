'use strict';

module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('categoria', {
    id_categoria: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre_categoria: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    tableName: 'categoria',
    timestamps: false
  });

  return Categoria;
}