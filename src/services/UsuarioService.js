const {Usuario} = require('../../models');
const bcrypt = require('bcrypt');

module.exports = {
    async createUsuario(usuario){
        const hash = await bcrypt.hash(usuario.password, 10);
        usuario.password = hash;
        return Usuario.create(usuario);
    },
    async getAllUsuarios(){
        return Usuario.findAll();
    },
    async getUsuarioById(id){
        return Usuario.findByPk(id);
    },
    async updateUsuario(id, usuario){
        return Usuario.update(usuario, {
            where: {
                id
            }
        });
    },
    async deleteUsuario(id){
        return Usuario.destroy({
            where: {
                id
            }
        });
    }
};