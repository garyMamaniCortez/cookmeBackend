const express = require('express');
const router = express.Router();
const RecetaController = require('../controllers/RecetaController');

router.post('/recetas', RecetaController.createReceta);
router.get('/recetas', RecetaController.getRecetas);
router.get('/recetas/:id', RecetaController.getRecetaById);
router.put('/recetas/:id', RecetaController.updateReceta);
router.delete('/recetas/:id', RecetaController.deleteReceta);

module.exports = router;