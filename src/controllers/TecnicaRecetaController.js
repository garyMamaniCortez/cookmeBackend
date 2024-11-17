const TecnicaRecetaService = require('../services/TecnicaRecetaService');

module.exports = {
    async createTecnicaReceta(req, res) {
        try {
            let tecnicaReceta = await TecnicaRecetaService.createTecnicaReceta(req.body);
            res.status(201).send(tecnicaReceta);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getTecnicaRecetas(req, res) {
        try {
            let tecnicaRecetas = await TecnicaRecetaService.getTecnicaRecetas();
            res.status(200).send(tecnicaRecetas);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getTecnicaRecetaId(req, res) {
        try {
            let tecnicaReceta = await TecnicaRecetaService.getTecnicaRecetaId(req.params.idTecnica, req.params.idReceta);
            res.status(200).send(tecnicaReceta);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getTecnicaRecetaPorTecnica(req, res) {
        try {
            let tecnicaRecetas = await TecnicaRecetaService.getTecnicaRecetaPorTecnica(req.params.idTecnica);
            res.status(200).send(tecnicaRecetas);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getTecnicaRecetaPorReceta(req, res) {
        try {
            let tecnicaRecetas = await TecnicaRecetaService.getTecnicaRecetaPorReceta(req.params.idReceta);
            res.status(200).send(tecnicaRecetas);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async deleteTecnicaReceta(req, res) {
        try {
            await TecnicaRecetaService.deleteTecnicaReceta(req.params.idTecnica, req.params.idReceta);
            res.status(204).send();
        } catch (error) {
            res.status(400).send(error);
        }
    }
};