const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/CategoriaController');

router.post('/categoria', CategoriaController.createCategoria);
router.get('/categoria', CategoriaController.getAllCategorias);
router.get('/categoria/:id', CategoriaController.getCategoriaById);
router.put('/categoria/:id', CategoriaController.updateCategoria);
router.delete('/categoria/:id', CategoriaController.deleteCategoria);

module.exports = router;