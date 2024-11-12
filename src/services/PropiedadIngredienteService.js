const {Propiedad_Ingrediente} = require('../../models');

module.exports = {
    async createPropiedadIngrediente(propiedad_ingrediente) {
        return Propiedad_Ingrediente.create(propiedad_ingrediente);
    },
    async getPropiedadIngrediente(id_propiedad, id_ingrediente) {
        return Propiedad_Ingrediente.findOne({
            where: {
                id_propiedad,
                id_ingrediente
            }
        });
    },
    async getIngredienteId(id_ingrediente) {
        return Propiedad_Ingrediente.findAll({
            where: {
                id_ingrediente
            }
        });
    },
    async getPropiedadId(id_propiedad) {
        return Propiedad_Ingrediente.findAll({
            where: {
                id_propiedad
            }
        });
    },
    async updatePropiedadIngrediente(id_propiedad, id_ingrediente, propiedad_ingrediente) {
        return Propiedad_Ingrediente.update(propiedad_ingrediente, {
            where: {
                id_propiedad,
                id_ingrediente
            }
        });
    },
    async deletePropiedadIngrediente(id_propiedad, id_ingrediente) {
        return Propiedad_Ingrediente.destroy({
            where: {
                id_propiedad,
                id_ingrediente
            }
        });
    }
};
