const {Tecnica_Receta} = require('../../models');

module.exports = {
    async createTecnicaReceta(tecnicaReceta) {
        return await Tecnica_Receta.create(tecnicaReceta);
    },
    async getTecnicaRecetas() {
        return await Tecnica_Receta.findAll();
    },
    async getTecnicaRecetaId(idTecnica, idReceta) {
        return await Tecnica_Receta.findOne({
            where: {
                id_tecnica: idTecnica,
                id_receta: idReceta
            }
        });
    },
    async updateTecnicaReceta(tecnicaReceta) {
        return await Tecnica_Receta.update(tecnicaReceta, {
            where: {
                id_tecnica: tecnicaReceta.id_tecnica,
                id_receta: tecnicaReceta.id_receta
            }
        });
    },
    async deleteTecnicaReceta(idTecnica, idReceta) {
        return await Tecnica_Receta.destroy({
            where: {
                id_tecnica: idTecnica,
                id_receta: idReceta
            }
        });
    }
};