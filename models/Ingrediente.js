'use strict';

module.exports = (sequelize, DataTypes) => {
  const Ingrediente = sequelize.define('Ingrediente', {
    id_ingrediente: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre_ingrediente: {
      allowNull: false,
      type: DataTypes.STRING
    },
    preferencia: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  }, {
    tableName: 'Ingrediente',
    timestamps: false
  });

  Ingrediente.associate = function(models) {
    Ingrediente.hasMany(models.Preferencia_Culinaria, {
      foreignKey: 'id_ingrediente',
      as: 'preferencias'
    });
  };

  return Ingrediente;
}