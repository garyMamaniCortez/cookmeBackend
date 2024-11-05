'use strict';

module.exports = (sequelize, DataTypes) => {
    const Tecnica_Receta = sequelize.define('Tecnica_Receta', {
        id_tecnica: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        id_receta: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'Tecnica_Receta',
        timestamps: false
    });

    Tecnica_Receta.associate = function(models) {
        Tecnica_Receta.belongsTo(models.Tecnica, {
            foreignKey: 'id_tecnica',
            as: 'tecnica'
        });
        Tecnica_Receta.belongsTo(models.Receta, {
            foreignKey: 'id_receta',
            as: 'receta'
        });
    };
    return Tecnica_Receta;
}