const HistorialBusquedaService = require('../services/HistorialBusquedaService');

module.exports = {
    async createHistorialBusqueda(req, res) {
        try {
            const { id_usuario, id_receta, busqueda, fecha } = req.body;
            const historialBusqueda = await HistorialBusquedaService.createHistorialBusqueda(id_usuario, id_receta, busqueda, fecha);
            res.status(201).send(historialBusqueda);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getAllHistorialBusqueda(req, res) {
        try {
            const historialBusqueda = await HistorialBusquedaService.getAllHistorialBusqueda();
            res.status(200).send(historialBusqueda);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getHistorialBusquedaById(req, res) {
        try {
            const historialBusqueda = await HistorialBusquedaService.getHistorialBusquedaById(req.params.id);
            if (!historialBusqueda) {
                res.status(404).send('Historial de busqueda no encontrado');
            } else {
                res.status(200).send(historialBusqueda);
            }
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async updateHistorialBusqueda(req, res) {
        try {
            const historialBusqueda = await HistorialBusquedaService.updateHistorialBusqueda(req.params.id, req.body);
            if (!historialBusqueda) {
                res.status(404).send('Historial de busqueda no encontrado');
            } else {
                res.status(200).send(historialBusqueda);
            }
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async deleteHistorialBusqueda(req, res) {
        try {
            const historialBusqueda = await HistorialBusquedaService.deleteHistorialBusqueda(req.params.id);
            if (!historialBusqueda) {
                res.status(404).send('Historial de busqueda no encontrado');
            } else {
                res.status(204).send();
            }
        } catch (error) {
            res.status(400).send(error);
        }
    }
};