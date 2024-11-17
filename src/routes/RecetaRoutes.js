const express = require('express');
const router = express.Router();
const RecetaController = require('../controllers/RecetaController');

router.post('/receta', RecetaController.createReceta);
router.get('/receta', RecetaController.getRecetas);
router.get('/receta/:id', RecetaController.getRecetaById);
router.put('/receta/:id', RecetaController.updateReceta);
router.delete('/receta/:id', RecetaController.deleteReceta);

module.exports = router;