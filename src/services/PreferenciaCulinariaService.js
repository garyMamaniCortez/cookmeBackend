const {Preferencia_Culinaria} = require('../../models');

module.exports = {
    async createPreferenciaCulinaria(preferenciaCulinaria) {
        return Preferencia_Culinaria.create(preferenciaCulinaria);
    },
    async getPreferenciasCulinarias() {
        return Preferencia_Culinaria.findAll();
    },
    async getPreferenciaCulinaria(id_usuario, id_ingrediente) {
        return Preferencia_Culinaria.findOne({
            where: {
                id_usuario,
                id_ingrediente
            }
        });
    },
    async updatePreferenciaCulinaria(id_usuario, id_ingrediente, preferenciaCulinaria) {
        return Preferencia_Culinaria.update(preferenciaCulinaria, {
            where: {
                id_usuario,
                id_ingrediente
            }
        });
    },
    async deletePreferenciaCulinaria(id_usuario, id_ingrediente) {
        return Preferencia_Culinaria.destroy({
            where: {
                id_usuario,
                id_ingrediente
            }
        });
    }
};