const {comentario} = require('../../models');
const {usuario} = require('../../models');

module.exports = {
    async createComentario(datosComentario){
        return comentario.create(datosComentario);
    },
    async getAllComentarios(){
        return comentario.findAll();
    },
    async getComentarioById(idReceta) {
        return comentario.findAll({
            where: {
                id_receta: idReceta
            },
            include: [
                {
                    model: usuario,
                    as: 'usuario',
                    attributes: ['nombre_usuario']
                }
            ]
        });
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