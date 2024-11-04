'use strict';

module.exports = (sequelize, DataTypes) => {
  const Receta_Favorita = sequelize.define('Receta_Favorita', {
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
    tableName: 'Receta_Favorita',
    timestamps: false
  });
  Receta_Favorita.associate = function(models) {
    Receta_Favorita.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario'
    });
    Receta_Favorita.belongsTo(models.Receta, {
      foreignKey: 'id_receta',
      as: 'receta'
    });
  };
  return Receta_Favorita;
}