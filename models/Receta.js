'use strict';

module.exports = (sequelize, DataTypes) => {
  const Receta = sequelize.define('Receta', {
    id_receta: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre_receta: {
      allowNull: false,
      type: DataTypes.STRING
    },
    descripcion: {
      allowNull: false,
      type: DataTypes.STRING
    },
    instrucciones: {
      allowNull: false,
      type: DataTypes.STRING
    },
    tiempo_preparacion: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    tiempo_coccion: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    imagen: {
      allowNull: false,
      type: DataTypes.STRING // Ubicacion de la imagen
    },
    id_categoria: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    id_usuario: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    tableName: 'Receta',
    timestamps: false
  });
  Receta.associate = function(models) {
    Receta.belongsTo(models.Categoria, {
      foreignKey: 'id_categoria',
      as: 'categoria'
    });
    Receta.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });
  };
  return Receta;
}