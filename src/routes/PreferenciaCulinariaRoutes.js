const express = require('express');
const router  = express.Router();
const PreferenciaCulinariaController = require('../controllers/PreferenciaCulinariaController');

router.post('/preferencia-culinaria', PreferenciaCulinariaController.createPreferenciaCulinaria);
router.get('/preferencia-culinaria', PreferenciaCulinariaController.getPreferenciasCulinarias);
router.get('/preferencia-culinaria-usuario/:id_usuario', PreferenciaCulinariaController.getPreferenciaCulinariaPorUsuario);
router.get('/preferencia-culinaria-ingrediente/:id_ingrediente', PreferenciaCulinariaController.getPreferenciaCulinariaPorIngrediente);
router.get('/preferencia-culinaria/:id_usuario/:id_ingrediente', PreferenciaCulinariaController.getPreferenciaCulinaria);
router.delete('/preferencia-culinaria/:id_usuario/:id_ingrediente', PreferenciaCulinariaController.deletePreferenciaCulinaria);

module.exports = router;