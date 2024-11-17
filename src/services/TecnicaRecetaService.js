const {tecnica_receta} = require('../../models');

module.exports = {
    async createTecnicaReceta(datosTR) {
        return await tecnica_receta.create(datosTR);
    },
    async getTecnicaRecetas() {
        return await tecnica_receta.findAll();
    },
    async getTecnicaRecetaById(id_tecnica, id_receta) {
        return await tecnica_receta.findByPk(id_tecnica, id_receta);
    },
    async getTecnicaRecetaPorTecnica(id_tecnica) {
        return await tecnica_receta.findAll({
            where: {
                id_tecnica
            }
        });
    },
    async getTecnicaRecetaPorReceta(id_receta) {
        return await tecnica_receta.findAll({
            where: {
                id_receta
            }
        });
    }, 
    async deleteTecnicaReceta(id_tecnica, id_receta) {
        return await tecnica_receta.destroy({
            where: {
                id_tecnica,
                id_receta
            }
        });
    }
};