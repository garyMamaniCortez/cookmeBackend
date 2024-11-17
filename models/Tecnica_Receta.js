'use strict';

module.exports = (sequelize, DataTypes) => {
    const Tecnica_Receta = sequelize.define('tecnica_receta', {
        id_tecnica: {
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
        tableName: 'tecnica_receta',
        timestamps: false
    });

    Tecnica_Receta.associate = function(models) {
        Tecnica_Receta.belongsTo(models.tecnica, {
            foreignKey: 'id_tecnica',
            as: 'tecnica'
        });
        Tecnica_Receta.belongsTo(models.receta, {
            foreignKey: 'id_receta',
            as: 'receta'
        });
    };
    return Tecnica_Receta;
}