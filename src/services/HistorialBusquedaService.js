const {Historial_Busqueda} = require('../../models');

module.exports = {
    async createHistorialBusqueda(id_usuario, id_receta, busqueda, fecha) {
        return await Historial_Busqueda.create({id_usuario, id_receta, busqueda, fecha});
    },
    async getAllHistorialBusqueda() {
        return await Historial_Busqueda.findAll();
    },
    async getHistorialBusquedaById(id) {
        return await Historial_Busqueda.findByPk(id);
    },
    async updateHistorialBusqueda(id, historialBusqueda) {
        return await Historial_Busqueda.update(historialBusqueda, {
            where: {
                id
            }
        });
    },
    async deleteHistorialBusqueda(id) {
        return await Historial_Busqueda.destroy({
            where: {
                id
            }
        });
    }
};