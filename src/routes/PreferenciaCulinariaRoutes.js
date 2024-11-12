const express = require('express');
const router  = express.Router();
const PreferenciaCulinariaController = require('../controllers/PreferenciaCulinariaController');

router.post('/preferencias-culinarias', PreferenciaCulinariaController.createPreferenciaCulinaria);
router.get('/preferencias-culinarias', PreferenciaCulinariaController.getPreferenciasCulinarias);
router.get('/preferencias-culinarias/:id_usuario/:id_ingrediente', PreferenciaCulinariaController.getPreferenciaCulinaria);
router.put('/preferencias-culinarias/:id_usuario/:id_ingrediente', PreferenciaCulinariaController.updatePreferenciaCulinaria);
router.delete('/preferencias-culinarias/:id_usuario/:id_ingrediente', PreferenciaCulinariaController.deletePreferenciaCulinaria);

module.exports = router;