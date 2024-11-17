const express = require('express');
const router = express.Router();
const PropiedadIngredienteController = require('../controllers/PropiedadIngredienteController');

router.post('/propiedad-ingrediente', PropiedadIngredienteController.createPropiedadIngrediente);
router.get('/propiedad-ingrediente', PropiedadIngredienteController.getAllPropiedadIngredientes);
router.get('/propiedad-ingrediente-propiedad/:id_propiedad', PropiedadIngredienteController.getPropiedadIngredientePorPropiedad);
router.get('/propiedad-ingrediente-ingrediente/:id_ingrediente', PropiedadIngredienteController.getPropiedadIngredientePorIngrediente);
router.get('/propiedad-ingrediente/:id_propiedad/:id_ingrediente', PropiedadIngredienteController.getPropiedadIngrediente);
router.put('/propiedad-ingrediente/:id_propiedad/:id_ingrediente', PropiedadIngredienteController.updatePropiedadIngrediente);
router.delete('/propiedad-ingrediente/:id_propiedad/:id_ingrediente', PropiedadIngredienteController.deletePropiedadIngrediente);

module.exports = router;