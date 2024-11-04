'use strict';

module.exports = (sequelize, DataTypes) => {
  const Comentario = sequelize.define('Comentario', {
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
      type: DataTypes.DATE
    }
  }, {
    tableName: 'Comentario',
    timestamps: false
  });
  Comentario.associate = function(models) {
    Comentario.belongsTo(models.Receta, {
      foreignKey: 'id_receta',
      as: 'receta'
    });
    Comentario.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });
  };
  return Comentario;
}