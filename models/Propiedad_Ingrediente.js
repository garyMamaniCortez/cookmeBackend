'use strict';

module.exports = (sequelize, DataTypes) => {
  const Propiedad_Ingrediente = sequelize.define('Propiedad_Ingrediente', {
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
    tableName: 'Propiedad_Ingrediente',
    timestamps: false
  });

  Propiedad_Ingrediente.associate = function(models) {
    Propiedad_Ingrediente.hasMany(models.Ingrediente, {
      foreignKey: 'id_propiedad',
      as: 'propiedad'    
    });    
    Propiedad_Ingrediente.hasMany(models.Propiedad, {
      foreignKey: 'id_ingrediente',
      as: 'ingrediente'
    });
  };

  return Propiedad_Ingrediente;
}