const {receta} = require('../../models');

module.exports = {
    async createReceta(datosReceta){
        return receta.create(datosReceta);
    },
    async getAllRecetas(){
        return receta.findAll();
    },
    async getRecetaById(id){
        return receta.findByPk(id);
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
    }
};