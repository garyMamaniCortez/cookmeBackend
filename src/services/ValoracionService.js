const {Valoracion} = require('../../models');

module.exports = {
    async createValoracion(valoracion){
        return Valoracion.create(valoracion);
    },
    async getAllValoraciones(){
        return Valoracion.findAll();
    },
    async getValoracionById(id){
        return Valoracion.findByPk(id);
    },
    async updateValoracion(id, valoracion){
        return Valoracion.update(valoracion, {
            where: {
                id_valoracion: id
            }
        });
    },
    async deleteValoracion(id){
        return Valoracion.destroy({
            where: {
                id_valoracion: id
            }
        });
    }
};