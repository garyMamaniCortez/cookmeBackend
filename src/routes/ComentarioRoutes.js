const express = require('express');
const router = express.Router();
const ComentarioController = require('../controllers/ComentarioController');

router.post('/comentarios', ComentarioController.createComentario);
router.get('/comentarios', ComentarioController.getComentarios);
router.get('/comentarios/:id', ComentarioController.getComentarioById);
router.put('/comentarios/:id', ComentarioController.updateComentario);
router.delete('/comentarios/:id', ComentarioController.deleteComentario);

module.exports = router;