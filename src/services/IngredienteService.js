const {ingrediente} = require('../../models');

module.exports = {
    async createIngrediente(datosIngrediente) {
        return ingrediente.create(datosIngrediente);
    },
    async getAllIngrediente() {
        return ingrediente.findAll();
    },
    async getIngrediente(id) {
        return ingrediente.findByPk(id);
    },
    async updateIngrediente(id, datosIngrediente) {
        return ingrediente.update(datosIngrediente, {
            where: {
                id_ingrediente: id
            }
        });
    },
    async deleteIngrediente(id) {
        return await ingrediente.destroy({
            where: {
                id_ingrediente: id
            }
        });
    }
};