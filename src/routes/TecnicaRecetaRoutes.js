const express = require('express');
const router = express.Router();
const TecnicaRecetaController = require('../controllers/TecnicaRecetaController');

router.post('/tecnicaReceta', TecnicaRecetaController.createTecnicaReceta);
router.get('/tecnicaRecetas', TecnicaRecetaController.getTecnicaRecetas);
router.get('/tecnicaReceta/:idTecnica/:idReceta', TecnicaRecetaController.getTecnicaRecetaId);
router.put('/tecnicaReceta/:idTecnica/:idReceta', TecnicaRecetaController.updateTecnicaReceta);
router.delete('/tecnicaReceta/:idTecnica/:idReceta', TecnicaRecetaController.deleteTecnicaReceta);

module.exports = router;