const express = require('express');
const router = express.Router();
const PropiedadController = require('../controllers/PropiedadController');

router.post('/propiedades', PropiedadController.createPropiedad);
router.get('/propiedades', PropiedadController.getPropiedades);
router.get('/propiedades/:id', PropiedadController.getPropiedadById);
router.put('/propiedades/:id', PropiedadController.updatePropiedad);
router.delete('/propiedades/:id', PropiedadController.deletePropiedad);

module.exports = router;