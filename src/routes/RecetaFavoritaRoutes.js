const express = require('express');
const router = express.Router();
const RecetaFavoritaController = require('../controllers/RecetaFavoritaController');

router.post('/receta-favorita', RecetaFavoritaController.createRecetaFavorita);
router.get('/receta-favorita', RecetaFavoritaController.getAllRecetasFavoritas);
router.get('/receta-favorita/:id_receta/:id_usuario', RecetaFavoritaController.getRecetaFavorita);
router.get('/receta-favorita-usuario/:id', RecetaFavoritaController.getRecetaFavoritaPorUsuario);
router.get('/receta-favorita-receta/:id', RecetaFavoritaController.getRecetaFavoritaPorReceta);
router.delete('/receta-favorita/:id_receta/:id_usuario', RecetaFavoritaController.deleteRecetaFavorita);

module.exports = router;