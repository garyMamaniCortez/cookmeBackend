const {receta} = require('../../models');
const {valoracion} = require('../../models');
const {categoria} = require('../../models');
const {receta_ingrediente} = require('../../models');
const {ingrediente} = require('../../models');
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
                },
                {
                    model: receta_ingrediente,
                    as: 'receta-ingredientes', // Alias definido en las asociaciones
                    attributes: ['id_ingrediente'],
                    include: [
                        {
                            model: ingrediente,
                            as: 'ingrediente', // Alias definido en las asociaciones
                            attributes: ['nombre_ingrediente'] // Sólo queremos el nombre del ingrediente
                        }
                    ]
                }
            ],
            group: [
                'receta.id_receta',
                'receta-ingredientes.id_receta',
                'receta-ingredientes.id_ingrediente',
                'receta-ingredientes->ingrediente.id_ingrediente',
                'receta-ingredientes->ingrediente.nombre_ingrediente'
            ]
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
                    ),
                    Sequelize.where(
                        Sequelize.fn('LOWER', Sequelize.col('receta-ingredientes->ingrediente.nombre_ingrediente')),
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
                }, 
                {
                    model: receta_ingrediente,
                    as: 'receta-ingredientes', // Alias definido en la asociación de receta con receta_ingrediente
                    attributes: [],
                    include: [
                        {
                            model: ingrediente,
                            as: 'ingrediente', // Alias definido en la asociación de receta_ingrediente con ingrediente
                            attributes: [] // No incluir atributos de ingrediente en el resultado
                        }
                    ]
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