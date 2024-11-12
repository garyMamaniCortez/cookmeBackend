const {Propiedad} = require('../../models');

module.exports = {
    async create(propiedad) {
        return Propiedad.create(propiedad);
    },
    async findAll() {
        return Propiedad.findAll();
    },
    async findById(id) {
        return Propiedad.findByPk(id);
    },
    async update(id, propiedad) {
        return Propiedad.update(propiedad, {
        where: {
            id_propiedad: id
        }
        });
    },
    async delete(id) {
        return Propiedad.destroy({
        where: {
            id_propiedad: id
        }
        });
    }
};