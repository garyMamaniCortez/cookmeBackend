const express = require('express');
const router = express.Router();
const HistorialBusquedaController = require('../controllers/HistorialBusquedaController');

router.post('/historialbusqueda', HistorialBusquedaController.createHistorialBusqueda);
router.get('/historialbusqueda', HistorialBusquedaController.getAllHistorialBusqueda);
router.get('/historialbusqueda/:id', HistorialBusquedaController.getHistorialBusquedaById);
router.put('/historialbusqueda/:id', HistorialBusquedaController.updateHistorialBusqueda);
router.delete('/historialbusqueda/:id', HistorialBusquedaController.deleteHistorialBusqueda);

module.exports = router;