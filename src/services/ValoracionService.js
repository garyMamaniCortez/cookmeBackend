const {valoracion} = require('../../models');

module.exports = {
    async createValoracion(datosValoracion){
        return valoracion.create(datosValoracion);
    },
    async getAllValoraciones(){
        return valoracion.findAll();
    },
    async getValoracionById(id){
        return valoracion.findByPk(id);
    },
    async updateValoracion(id, datosValoracion){
        return valoracion.update(datosValoracion, {
            where: {
                id_valoracion: id
            }
        });
    },
    async deleteValoracion(id){
        return valoracion.destroy({
            where: {
                id_valoracion: id
            }
        });
    }
};