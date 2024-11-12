const RecetaFavoritaService = require('../services/RecetaFavoritaService');

module.exports = {
    async createRecetaFavorita(req, res){
        try {
            const recetaFavorita = await RecetaFavoritaService.createRecetaFavorita(req.body);
            res.status(201).send(recetaFavorita);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async getAllRecetasFavoritas(req, res){
        try {
            const recetasFavoritas = await RecetaFavoritaService.getAllRecetasFavoritas();
            res.status(200).send(recetasFavoritas);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async getRecetaFavoritaById(req, res){
        try {
            const recetaFavorita = await RecetaFavoritaService.getRecetaFavoritaById(req.params.id);
            res.status(200).send(recetaFavorita);
        } catch (error) {
            res.status(404).send({message: error.message});
        }
    },
    async updateRecetaFavorita(req, res){
        try {
            await RecetaFavoritaService.updateRecetaFavorita(req.params.id, req.body);
            res.status(204).send();
        } catch (error) {
            res.status(404).send({message: error.message});
        }
    },
    async deleteRecetaFavorita(req, res){
        try {
            await RecetaFavoritaService.deleteRecetaFavorita(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).send({message: error.message});
        }
    }
};