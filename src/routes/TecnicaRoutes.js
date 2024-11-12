const express = require('express');
const router = express.Router();
const TecnicaController = require('../controllers/TecnicaController');

router.post('/tecnica', TecnicaController.createTecnica);
router.get('/tecnicas', TecnicaController.findAllTecnicas);
router.get('/tecnica/:id', TecnicaController.findTecnicaById);
router.put('/tecnica/:id', TecnicaController.updateTecnica);
router.delete('/tecnica/:id', TecnicaController.deleteTecnica);

module.exports = router;