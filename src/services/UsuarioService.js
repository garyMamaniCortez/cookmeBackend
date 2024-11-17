const {usuario} = require('../../models');
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
    }
};