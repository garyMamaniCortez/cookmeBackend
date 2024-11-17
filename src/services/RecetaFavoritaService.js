const {receta_favorita} = require('../../models');

module.exports = {
    async createRecetaFavorita(datosRF){
        return receta_favorita.create(datosRF);
    },
    async getAllRecetasFavoritas(){
        return receta_favorita.findAll();
    },
    async getRecetaFavoritaPorUsuario(id_usuario){
        return receta_favorita.findAll({
            where: {
                id_usuario
            }
        });
    },
    async getRecetaFavoritaPorReceta(id_receta){
        return receta_favorita.findAll({
            where: {
                id_receta
            }
        });
    },
    async getRecetaFavorita(id_receta, id_usuario){
        return receta_favorita.findOne({
            where: {
                id_receta,
                id_usuario
            }
        });
    },
    async deleteRecetaFavorita(id_receta, id_usuario){
        return receta_favorita.destroy({
            where: {
                id_receta,
                id_usuario
            }
        });
    }
};