const {Receta} = require('../../models');

module.exports = {
    async createReceta(receta){
        return Receta.create(receta);
    },
    async getAllRecetas(){
        return Receta.findAll();
    },
    async getRecetaById(id){
        return Receta.findByPk(id);
    },
    async updateReceta(id, receta){
        return Receta.update(receta, {
            where: {
                id
            }
        });
    },
    async deleteReceta(id){
        return Receta.destroy({
            where: {
                id
            }
        });
    }
};