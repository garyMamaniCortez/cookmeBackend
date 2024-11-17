const express = require('express');
const router = express.Router();
const TecnicaRecetaController = require('../controllers/TecnicaRecetaController');

router.post('/tecnica-receta', TecnicaRecetaController.createTecnicaReceta);
router.get('/tecnica-receta', TecnicaRecetaController.getTecnicaRecetas);
router.get('/tecnica-receta/:idTecnica/:idReceta', TecnicaRecetaController.getTecnicaRecetaId);
router.get('/tecnica-receta-tecnica/:id_tecnica', TecnicaRecetaController.getTecnicaRecetaPorTecnica);
router.get('/tecnica-receta-receta/:id_receta', TecnicaRecetaController.getTecnicaRecetaPorReceta);
router.delete('/tecnica-receta/:idTecnica/:idReceta', TecnicaRecetaController.deleteTecnicaReceta);

module.exports = router;