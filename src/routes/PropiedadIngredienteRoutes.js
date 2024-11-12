const express = require('express');
const router = express.Router();
const PropiedadIngredienteController = require('../controllers/PropiedadIngredienteController');

router.post('/propiedad_ingrediente', PropiedadIngredienteController.createPropiedadIngrediente);
router.get('/propiedad_ingrediente/:id_propiedad/:id_ingrediente', PropiedadIngredienteController.getPropiedadIngrediente);
router.get('/propiedad_ingrediente/ingrediente/:id_ingrediente', PropiedadIngredienteController.getIngredienteId);
router.get('/propiedad_ingrediente/propiedad/:id_propiedad', PropiedadIngredienteController.getPropiedadId);
router.put('/propiedad_ingrediente/:id_propiedad/:id_ingrediente', PropiedadIngredienteController.updatePropiedadIngrediente);
router.delete('/propiedad_ingrediente/:id_propiedad/:id_ingrediente', PropiedadIngredienteController.deletePropiedadIngrediente);

module.exports = router;