const express = require('express');
const router = express.Router();
const RecetaFavoritaController = require('../controllers/RecetaFavoritaController');

router.post('/recetasFavoritas', RecetaFavoritaController.createRecetaFavorita);
router.get('/recetasFavoritas', RecetaFavoritaController.getAllRecetasFavoritas);
router.get('/recetasFavoritas/:id', RecetaFavoritaController.getRecetaFavoritaById);
router.put('/recetasFavoritas/:id', RecetaFavoritaController.updateRecetaFavorita);
router.delete('/recetasFavoritas/:id', RecetaFavoritaController.deleteRecetaFavorita);

module.exports = router;