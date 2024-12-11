const { usuario, valoracion, comentario, receta } = require('../../models');
const bcrypt = require('bcrypt');

module.exports = {
    async createUsuario(datosUsuario){
        datosUsuario.password = bcrypt.hashSync(datosUsuario.password, 10);
        return usuario.create(datosUsuario);
    },
    async getAllUsuarios(){
        return usuario.findAll();
    },
    async getUsuarioById(id){
        return usuario.findByPk(id);
    },
    async updateUsuario(id, datosUsuario){
        datosUsuario.password = bcrypt.hashSync(datosUsuario.password, 10);
        return usuario.update(datosUsuario, {
            where: {
                id_usuario: id
            }
        });
    },
    async deleteUsuario(id){
        return usuario.destroy({
            where: {
                id_usuario: id
            }
        });
    },
    async getLoginUsuario(datosUsuario){
        const datos = await usuario.findOne({
            where: {
                email: datosUsuario.email
            }
        });
        var res = null
        if(datos){
            if(bcrypt.compareSync(datosUsuario.password, datos.password)){
                res = datos;                     
            }
            return res;
        }
    },
    async getNotificaciones(idUsuario) {
        return receta.findAll({
            where: {
                id_usuario: idUsuario
            },
            attributes: ['nombre_receta'],
            include: [
                {
                    model: comentario,
                    as: 'comentarios',
                    attributes: ['id_comentario', 'comentario'],
                    include: [
                        {
                            model: usuario,
                            as: 'usuario',
                            attributes: ['nombre_usuario']
                        }
                    ]
                },
                {
                    model: valoracion,
                    as: 'valoraciones',
                    attributes: ['id_valoracion', 'valoracion'],
                    include: [
                        {
                            model: usuario,
                            as: 'usuario', // Incluye información del usuario que realizó la valoración
                            attributes: ['nombre_usuario']
                        }
                    ]
                }
            ]
        });
    }
};