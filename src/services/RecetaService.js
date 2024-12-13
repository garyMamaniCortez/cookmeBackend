const {receta} = require('../../models');
const {valoracion} = require('../../models');
const {categoria} = require('../../models');
const { Sequelize } = require('sequelize');

module.exports = {
    async createReceta(datosReceta){
        return receta.create(datosReceta);
    },
    async getAllRecetas(){
        return receta.findAll({
            attributes: [
                'id_receta', 
                'nombre_receta', 
                'descripcion', 
                'instrucciones', 
                'tiempo_preparacion', 
                'tiempo_coccion', 
                'imagen',
                'id_categoria',
                'id_usuario',
                [Sequelize.cast(Sequelize.fn('AVG', Sequelize.col('valoraciones.valoracion')), 'FLOAT'), 'promedio_valoracion']
            ],
            include: [
                {
                    model: valoracion,
                    as: 'valoraciones',
                    attributes: []
                }
            ],
            group: ['receta.id_receta']
        });
    },
    async getRecetaById(id){
        return receta.findOne({
            where: { id_receta: id },
            attributes: [
                'id_receta', 
                'nombre_receta', 
                'descripcion', 
                'instrucciones', 
                'tiempo_preparacion', 
                'tiempo_coccion', 
                'imagen',
                'id_categoria',
                'id_usuario',
                [Sequelize.cast(Sequelize.fn('AVG', Sequelize.col('valoraciones.valoracion')), 'FLOAT'), 'promedio_valoracion']
            ],
            include: [
                {
                    model: valoracion,
                    as: 'valoraciones',
                    attributes: []
                }
            ],
            group: ['receta.id_receta']
        });
    },
    async updateReceta(id, datosReceta){
        return receta.update(datosReceta, {
            where: {
                id_receta: id
            }
        });
    },
    async deleteReceta(id){
        return receta.destroy({
            where: {
                id_receta: id
            }
        });
    },
    async searchReceta(query){
        return receta.findAll({
            where: {
                [Sequelize.Op.or]: [
                    Sequelize.where(
                        Sequelize.fn('LOWER', Sequelize.col('nombre_receta')),
                        {
                            [Sequelize.Op.like]: `%${query.toLowerCase()}%`
                        }
                    ),
                    Sequelize.where(
                        Sequelize.fn('LOWER', Sequelize.col('categoria.nombre_categoria')),
                        {
                            [Sequelize.Op.like]: `%${query.toLowerCase()}%`
                        }
                    )
                ]
            },
            include: [
                {
                    model: categoria,
                    as: 'categoria',
                    attributes: []
                }
            ]
        });
    },
    async getUserRecetas(id){
        return receta.findAll({
            where: { id_usuario: id }
        });
    },
};