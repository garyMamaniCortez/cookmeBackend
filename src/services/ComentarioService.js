const {comentario} = require('../../models');

module.exports = {
    async createComentario(datosComentario){
        return comentario.create(datosComentario);
    },
    async getAllComentarios(){
        return comentario.findAll();
    },
    async getComentarioById(id){
        return comentario.findByPk(id);
    },
    async updateComentario(id, datosComentario){
        return comentario.update(datosComentario, {
            where: {
                id_comentario: id
            }
        });
    },
    async deleteComentario(id){
        return comentario.destroy({
            where: {
                id_comentario: id
            }
        });
    }    
};