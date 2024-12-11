const express = require('express');
const router = express.Router();
const RecetaIngredienteController = require('../controllers/RecetaIngredienteController');

router.post('/receta-ingrediente', RecetaIngredienteController.createRecetaIngrediente);
router.get('/receta-ingrediente', RecetaIngredienteController.getAllRecetaIngredientes);
router.get('/receta-ingrediente/:id_receta/:id_ingrediente', RecetaIngredienteController.getRecetaIngrediente);
router.get('/ingrediente-por-receta', RecetaIngredienteController.getRecetaIngredientePorReceta);
router.get('/receta-por-ingrediente', RecetaIngredienteController.getRecetaPorIngrediente);
router.delete('/receta-ingrediente/:id_receta/:id_ingrediente', RecetaIngredienteController.deleteRecetaIngrediente);

module.exports = router;