'use strict';

module.exports = (sequelize, DataTypes) => {
  const Comentario = sequelize.define('comentario', {
    id_comentario: {
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
    comentario: {
      allowNull: false,
      type: DataTypes.STRING
    },
    fecha: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'comentario',
    timestamps: false
  });
  Comentario.associate = function(models) {
    Comentario.belongsTo(models.receta, {
      foreignKey: 'id_receta',
      as: 'receta'
    });
    Comentario.belongsTo(models.usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });
  };
  return Comentario;
}