'use strict';

module.exports = (sequelize, DataTypes) => {
  const Propiedad_Ingrediente = sequelize.define('propiedad_ingrediente', {
    id_propiedad: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_ingrediente: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'propiedad_ingrediente',
    timestamps: false
  });

  Propiedad_Ingrediente.associate = function(models) {
    Propiedad_Ingrediente.hasMany(models.propiedad, {
      foreignKey: 'id_propiedad',
      as: 'propiedad'    
    });    
    Propiedad_Ingrediente.hasMany(models.ingrediente, {
      foreignKey: 'id_ingrediente',
      as: 'ingrediente'
    });
  };

  return Propiedad_Ingrediente;
}