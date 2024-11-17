const express = require('express');
const router = express.Router();
const ComentarioController = require('../controllers/ComentarioController');

router.post('/comentario', ComentarioController.createComentario);
router.get('/comentario', ComentarioController.getComentarios);
router.get('/comentario/:id', ComentarioController.getComentarioById);
router.put('/comentario/:id', ComentarioController.updateComentario);
router.delete('/comentario/:id', ComentarioController.deleteComentario);

module.exports = router;