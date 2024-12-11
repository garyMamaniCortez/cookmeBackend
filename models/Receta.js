'use strict';

module.exports = (sequelize, DataTypes) => {
  const Receta = sequelize.define('receta', {
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
      type: DataTypes.STRING(2000)
    },
    instrucciones: {
      allowNull: false,
      type: DataTypes.STRING(2000)
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
      type: DataTypes.STRING
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
    tableName: 'receta',
    timestamps: false
  });
  Receta.associate = function(models) {
    Receta.belongsTo(models.categoria, {
      foreignKey: 'id_categoria',
      as: 'categoria'
    });
    Receta.belongsTo(models.usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });
    Receta.hasMany(models.valoracion, {
      foreignKey: 'id_receta',
      as: 'valoraciones'
    });
    Receta.hasMany(models.comentario, {
      foreignKey: 'id_receta',
      as: 'comentarios'
    });
  };
  return Receta;
}