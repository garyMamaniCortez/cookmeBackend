const express = require('express');
const router = express.Router();
const RecetaController = require('../controllers/RecetaController');
const upload = require('../Middlewares/upload.middleware.js');

router.post('/receta', upload.single('imagen'), RecetaController.createReceta);
router.post('/receta/buscar', RecetaController.searchReceta);
router.get('/receta', RecetaController.getRecetas);
router.get('/receta/:id', RecetaController.getRecetaById);
router.get('/uploads/:id', RecetaController.getImageById);
router.put('/receta/:id', RecetaController.updateReceta);
router.delete('/receta/:id', RecetaController.deleteReceta);

module.exports = router;