const express = require('express');
const router = express.Router();
const PropiedadController = require('../controllers/PropiedadController');

router.post('/propiedad', PropiedadController.createPropiedad);
router.get('/propiedad', PropiedadController.getPropiedades);
router.get('/propiedad/:id', PropiedadController.getPropiedadById);
router.put('/propiedad/:id', PropiedadController.updatePropiedad);
router.delete('/propiedad/:id', PropiedadController.deletePropiedad);

module.exports = router;