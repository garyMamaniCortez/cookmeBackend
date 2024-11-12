const {Ingrediente} = require('../../models');

module.exports = {
    async createIngrediente(ingrediente){
        return Ingrediente.create(ingrediente);
    },
    async getAllIngredientes(){
        return Ingrediente.findAll();
    },
    async getIngredienteById(id){
        return Ingrediente.findByPk(id);
    },
    async updateIngrediente(id, ingrediente){
        return Ingrediente.update(ingrediente, {
            where: {
                id
            }
        });
    },
    async deleteIngrediente(id){
        return Ingrediente.destroy({
            where: {
                id
            }
        });
    }
};