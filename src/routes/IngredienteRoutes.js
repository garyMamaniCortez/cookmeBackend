const express = require('express');
const Ingrediente = require('../../models/Ingrediente');
const router = express.Router();
const IngredienteController = require('../controllers/IngredienteController');

router.post('/ingredientes', IngredienteController.createIngrediente);
router.get('/ingredientes', IngredienteController.getAllIngredientes);
router.get('/ingredientes/:id', IngredienteController.getIngredienteById);
router.put('/ingredientes/:id', IngredienteController.updateIngrediente);
router.delete('/ingredientes/:id', IngredienteController.deleteIngrediente);

module.exports = router;