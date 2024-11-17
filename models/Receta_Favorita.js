'use strict';

module.exports = (sequelize, DataTypes) => {
  const Receta_Favorita = sequelize.define('receta_Favorita', {
    id_usuario: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_receta: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'receta_favorita',
    timestamps: false
  });
  Receta_Favorita.associate = function(models) {
    Receta_Favorita.belongsTo(models.usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });
    Receta_Favorita.belongsTo(models.receta, {
      foreignKey: 'id_receta',
      as: 'receta'
    });
  };
  return Receta_Favorita;
}