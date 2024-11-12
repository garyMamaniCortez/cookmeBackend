const {Comentario} = require('../../models');

module.exports = {
    async createComentario(comentario){
        return Comentario.create(comentario);
    },
    async getAllComentarios(){
        return Comentario.findAll();
    },
    async getComentarioById(id){
        return Comentario.findByPk(id);
    },
    async updateComentario(id, comentario){
        return Comentario.update(comentario, {
            where: {
                id
            }
        });
    },
    async deleteComentario(id){
        return Comentario.destroy({
            where: {
                id
            }
        });
    }    
};