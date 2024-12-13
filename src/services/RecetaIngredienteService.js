const {receta_ingrediente, receta, ingrediente} = require('../../models');
const {Sequelize} = require("sequelize");

module.exports = {
    async createRecetaIngrediente(recetaIngrediente) {
        return receta_ingrediente.create(recetaIngrediente);
    },
    async getRecetaIngredienteByNombreIngrediente(nombre){
        return ingrediente.findOne({
            where: { nombre_ingrediente: {[Sequelize.Op.like]: `%${nombre}%`} }
        });
    },
    async getAllRecetaIngredientes() {
        return receta_ingrediente.findAll();
    },
    async getIngredientePorReceta(querry) {
        return receta_ingrediente.findAll({
            include: [{
                model: ingrediente,
                as: 'ingrediente'
            },{
                model: receta,
                as: 'receta',
                where: {
                    nombre_receta: {
                        [Sequelize.Op.like]: `%${querry}%`
                    }
            }
            }]
        });
    },
    async getRecetaPorIngrediente(query) {
        return receta_ingrediente.findAll({
            include: [{
                model: receta,
                as: 'receta'
            }, {
                model: ingrediente,
                as: 'ingrediente',
                where: {
                    nombre_ingrediente: {
                        [Sequelize.Op.like]: `%${query}%`
                    }
                }
            }]
        });            
    },
    async getRecetaIngrediente(id_receta, id_ingrediente) {
        return receta_ingrediente.findOne({
            where: {
                id_receta,
                id_ingrediente
            }
        });
    },
    async deleteRecetaIngrediente(id_receta, id_ingrediente) {
        return receta_ingrediente.destroy({
            where: {
                id_receta,
                id_ingrediente
            }
        });
    },
}