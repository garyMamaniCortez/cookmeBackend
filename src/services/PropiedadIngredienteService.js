const {propiedad_ingrediente} = require('../../models');

module.exports = {
    async createPropiedadIngrediente(datosPI) {
        return propiedad_ingrediente.create(datosPI);
    },
    async getAllPropiedadIngredientes() {
        return propiedad_ingrediente.findAll();
    },
    async getPropiedadIngredientePorPropiedad(id_propiedad) {
        return propiedad_ingrediente.findAll({
            where: {
                id_propiedad
            }
        });
    },
    async getPropiedadIngredientePorIngrediente(id_ingrediente) {
        return propiedad_ingrediente.findAll({
            where: {
                id_ingrediente
            }
        });
    },
    async getPropiedadIngrediente(id_propiedad, id_ingrediente) {
        return propiedad_ingrediente.findOne({
            where: {
                id_propiedad,
                id_ingrediente
            }
        });
    },
    async updatePropiedadIngrediente(id_propiedad, id_ingrediente, datosPI) {
        return propiedad_ingrediente.update(datosPI, {
            where: {
                id_propiedad,
                id_ingrediente
            }
        });
    },
    async deletePropiedadIngrediente(id_propiedad, id_ingrediente) {
        return propiedad_ingrediente.destroy({
            where: {
                id_propiedad,
                id_ingrediente
            }
        });
    }
};
