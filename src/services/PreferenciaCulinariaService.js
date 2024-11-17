const {preferencia_culinaria} = require('../../models');

module.exports = {
    async createPreferenciaCulinaria(datosPC) {
        return preferencia_culinaria.create(datosPC);
    },
    async getPreferenciasCulinarias() {
        return preferencia_culinaria.findAll();
    },
    async getPreferenciaCulinariaPorUsuario(id) {
        return preferencia_culinaria.findAll({
            where: {
                id_usuario : id
            }
        });
    },
    async getPreferenciaCulinariaPorIngrediente(id) {
        return preferencia_culinaria.findAll({
            where: {
                id_ingrediente : id
            }
        });
    },
    async getPreferenciaCulinaria(id_usuario, id_ingrediente) {
        return preferencia_culinaria.findOne({
            where: {
                id_usuario,
                id_ingrediente
            }
        });
    },
    async updatePreferenciaCulinaria(id_usuario, id_ingrediente, datosPC) {
        return preferencia_culinaria.update(datosPC, {
            where: {
                id_usuario,
                id_ingrediente
            }
        });
    },
    async deletePreferenciaCulinaria(id_usuario, id_ingrediente) {
        return preferencia_culinaria.destroy({
            where: {
                id_usuario,
                id_ingrediente
            }
        });
    }
};