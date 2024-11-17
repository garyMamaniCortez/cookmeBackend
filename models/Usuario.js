'use strict';

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('usuario', {
    id_usuario: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre_usuario: {
      allowNull: false,
      type: DataTypes.STRING
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING
    },
    apellido: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'usuario',
    timestamps: false
  });
  
  return Usuario;
}
