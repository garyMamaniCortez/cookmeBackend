const RecetaIngredienteService = require('../services/RecetaIngredienteService');

module.exports = {
    async createRecetaIngrediente(req, res) {
        try {
            const recetaIngrediente = await RecetaIngredienteService.createRecetaIngrediente(req.body);
            res.status(201).send(recetaIngrediente);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getAllRecetaIngredientes(req, res) {
        try {
            const recetaIngredientes = await RecetaIngredienteService.getAllRecetaIngredientes();
            res.status(200).send(recetaIngredientes);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getRecetaIngredientePorReceta(req, res) {
        const nombre_receta = req.query.nombre_receta;
        try {
            const recetas = await RecetaIngredienteService.getIngredientePorReceta(nombre_receta);
            res.status(200).send(recetas);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getRecetaPorIngrediente(req, res) {
        const nombre_ingrediente = req.query.nombre_ingrediente;
        try {
            const recetas = await RecetaIngredienteService.getRecetaPorIngrediente(nombre_ingrediente);
            res.status(200).send(recetas);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getRecetaIngrediente(req, res) {
        try {
            const recetaIngrediente = await RecetaIngredienteService.getRecetaIngrediente(req.params.id_receta, req.params.id_ingrediente);
            if (recetaIngrediente) {
                res.status(200).send(recetaIngrediente);
            } else {
                res.status(404).send('RecetaIngrediente not found');
            }
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async deleteRecetaIngrediente(req, res) {
        try {
            await RecetaIngredienteService.deleteRecetaIngrediente(req.params.id_receta, req.params.id_ingrediente);
            res.status(204).send();
        } catch (error) {
            res.status(400).send(error);
        }
    },
}