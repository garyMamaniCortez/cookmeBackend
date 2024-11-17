const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

router.post('/usuario', UsuarioController.createUsuario);
router.get('/usuario', UsuarioController.getUsuarios);
router.get('/usuario/:id', UsuarioController.getUsuarioById);
router.put('/usuario/:id', UsuarioController.updateUsuario);
router.delete('/usuario/:id', UsuarioController.deleteUsuario);

module.exports = router;