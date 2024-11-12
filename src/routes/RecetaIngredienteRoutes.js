const express = require('express');
const router = express.Router();
const RecetaIngredienteController = require('../controllers/RecetaIngredienteController');

router.post('/recetasIngredientes', RecetaIngredienteController.createRecetaIngrediente);
router.get('/recetasIngredientes', RecetaIngredienteController.getAllRecetaIngredientes);
router.get('/recetasIngredientes/:id_receta/:id_ingrediente', RecetaIngredienteController.getRecetaIngrediente);
router.delete('/recetasIngredientes/:id_receta/:id_ingrediente', RecetaIngredienteController.deleteRecetaIngrediente);

module.exports = router;