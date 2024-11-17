const express = require('express');
const router = express.Router();
const HistorialBusquedaController = require('../controllers/HistorialBusquedaController');

router.post('/historial-busqueda', HistorialBusquedaController.createHistorialBusqueda);
router.get('/historial-busqueda', HistorialBusquedaController.getAllHistorialBusqueda);
router.get('/historial-busqueda/:id', HistorialBusquedaController.getHistorialBusquedaById);
router.put('/historial-busqueda/:id', HistorialBusquedaController.updateHistorialBusqueda);
router.delete('/historial-busqueda/:id', HistorialBusquedaController.deleteHistorialBusqueda);

module.exports = router;