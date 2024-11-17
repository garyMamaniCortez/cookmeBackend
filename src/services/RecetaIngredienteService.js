const {receta_ingrediente} = require('../../models');

module.exports = {
    async createRecetaIngrediente(recetaIngrediente) {
        return receta_ingrediente.create(recetaIngrediente);
    },
    async getAllRecetaIngredientes() {
        return receta_ingrediente.findAll();
    },
    async getRecetaIngredientePorReceta(id_receta) {
        return receta_ingrediente.findAll({
            where: {
                id_receta
            }
        });
    },
    async getRecetaIngredientePorIngrediente(id_ingrediente) {
        return receta_ingrediente.findAll({
            where: {
                id_ingrediente
            }
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