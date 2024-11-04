'use strict';

module.exports = (sequelize, DataTypes) => {
  const Preferencia_Culinaria = sequelize.define('Preferencia_Culinaria', {
    id_usuario: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_ingrediente: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    preferencia: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  }, {
    tableName: 'Preferencia_Culinaria',
    timestamps: false
  });
  Preferencia_Culinaria.associate = function(models) {
    Preferencia_Culinaria.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });
    Preferencia_Culinaria.belongsTo(models.Ingrediente, {
      foreignKey: 'id_ingrediente',
      as: 'ingrediente'
    });
  };
  return Preferencia_Culinaria;
}