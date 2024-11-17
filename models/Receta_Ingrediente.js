'use strict';

module.exports = (sequelize, DataTypes) => {
  const Receta_Ingrediente = sequelize.define('receta_ingrediente', {
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
    tableName: 'receta_ingrediente',
    timestamps: false
  });
  Receta_Ingrediente.associate = function(models) {
    Receta_Ingrediente.belongsTo(models.receta, {
      foreignKey: 'id_receta',
      as: 'receta'
    });
    Receta_Ingrediente.belongsTo(models.ingrediente, {
      foreignKey: 'id_ingrediente',
      as: 'ingrediente'
    });
  }
  return Receta_Ingrediente;
}