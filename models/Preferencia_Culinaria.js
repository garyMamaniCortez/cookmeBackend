'use strict';

module.exports = (sequelize, DataTypes) => {
  const Preferencia_Culinaria = sequelize.define('preferencia_culinaria', {
    id_usuario: {
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
    tableName: 'preferencia_culinaria',
    timestamps: false
  });
  Preferencia_Culinaria.associate = function(models) {
    Preferencia_Culinaria.belongsTo(models.usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });
    Preferencia_Culinaria.belongsTo(models.ingrediente, {
      foreignKey: 'id_ingrediente',
      as: 'ingrediente'
    });
  };
  return Preferencia_Culinaria;
}