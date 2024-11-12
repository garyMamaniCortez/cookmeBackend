const {Receta_Ingrediente} = require('../../models');

module.exports = {
    async createRecetaIngrediente(recetaIngrediente) {
        return Receta_Ingrediente.create(recetaIngrediente);
    },
    async getAllRecetaIngredientes() {
        return Receta_Ingrediente.findAll();
    },
    async getRecetaIngrediente(id_receta, id_ingrediente) {
        return Receta_Ingrediente.findOne({
            where: {
                id_receta,
                id_ingrediente
            }
        });
    },
    async deleteRecetaIngrediente(id_receta, id_ingrediente) {
        return Receta_Ingrediente.destroy({
            where: {
                id_receta,
                id_ingrediente
            }
        });
    },
}