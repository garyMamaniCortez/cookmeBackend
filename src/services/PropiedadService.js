const {propiedad} = require('../../models');

module.exports = {
    async create(dataPropiedad) {
        return propiedad.create(dataPropiedad);
    },
    async findAll() {
        return propiedad.findAll();
    },
    async findById(id) {
        return propiedad.findByPk(id);
    },
    async update(id, dataPropiedad) {
        return propiedad.update(dataPropiedad, {
        where: {
            id_propiedad: id
        }
        });
    },
    async delete(id) {
        return propiedad.destroy({
        where: {
            id_propiedad: id
        }
        });
    }
};