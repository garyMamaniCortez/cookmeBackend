const {historial_busqueda} = require('../../models');

module.exports = {
    async createHistorialBusqueda(datosHB) {
        return historial_busqueda.create(datosHB);
    },
    async getAllHistorialBusqueda() {
        return historial_busqueda.findAll();
    },
    async getHistorialBusquedaById(id_usuario) {
        return historial_busqueda.findAll({
            where: {
                id_usuario: id_usuario
            },
        });
    },
    async updateHistorialBusqueda(id, datosHB) {
        return historial_busqueda.update(datosHB, {
            where: {
                id_historial_busqueda: id
            }
        });
    },
    async deleteHistorialBusqueda(id) {
        return historial_busqueda.destroy({
            where: {
                id_historial_busqueda: id
            }
        });
    }
};