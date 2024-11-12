const {RecetaFavorita} = require('../../models');

module.exports = {
    async createRecetaFavorita(recetaFavorita){
        return RecetaFavorita.create(recetaFavorita);
    },
    async getAllRecetasFavoritas(){
        return RecetaFavorita.findAll();
    },
    async getRecetaFavoritaById(id){
        return RecetaFavorita.findByPk(id);
    },
    async updateRecetaFavorita(id, recetaFavorita){
        return RecetaFavorita.update(recetaFavorita, {
            where: {
                id
            }
        });
    },
    async deleteRecetaFavorita(id){
        return RecetaFavorita.destroy({
            where: {
                id
            }
        });
    }
};