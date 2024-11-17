const express = require('express');
const router = express.Router();
const IngredienteController = require('../controllers/IngredienteController');

router.post('/ingrediente', IngredienteController.createIngrediente);
router.get('/ingrediente', IngredienteController.getAllIngrediente);
router.get('/ingrediente/:id', IngredienteController.getIngrediente);
router.put('/ingrediente/:id', IngredienteController.updateIngrediente);
router.delete('/ingrediente/:id', IngredienteController.deleteIngrediente);

module.exports = router;