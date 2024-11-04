'use strict';

module.exports = (sequelize, DataTypes) => {
  const Receta_Ingrediente = sequelize.define('Receta_Ingrediente', {
    id_receta: {
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
    tableName: 'Receta_Ingrediente',
    timestamps: false
  });
  Receta_Ingrediente.associate = function(models) {
    Receta_Ingrediente.belongsTo(models.Receta, {
      foreignKey: 'id_receta',
      as: 'receta'
    });
    Receta_Ingrediente.belongsTo(models.Ingrediente, {
      foreignKey: 'id_ingrediente',
      as: 'ingrediente'
    });
  }
  return Receta_Ingrediente;
}