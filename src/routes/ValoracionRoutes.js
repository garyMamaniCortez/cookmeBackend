const express = require('express');
const router = express.Router();
const valoracionController = require('../services/ValoracionService');

router.post('/valoracion', valoracionController.createValoracion);
router.get('/valoracion', valoracionController.getAllValoraciones);
router.get('/valoracion/:id', valoracionController.getValoracionById);
router.put('/valoracion/:id', valoracionController.updateValoracion);
router.delete('/valoracion/:id', valoracionController.deleteValoracion);

module.exports = router;