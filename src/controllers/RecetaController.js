const RecetaService = require('../services/RecetaService');

module.exports = {
    async createReceta(req, res){
        try {
            const receta = await RecetaService.createReceta(req.body);
            res.status(201).json(receta);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    },
    async getRecetas(req, res){
        try {
            const recetas = await RecetaService.getAllRecetas();
            res.status(200).json(recetas);
        }catch (error){
            res.status(400).json({error: 'Error al obtener recetas'});
        }
    },
    async getRecetaById(req, res){
        try {
            const receta = await RecetaService.getRecetaById(req.params.id);
            res.status(200).json(receta);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    },
    async updateReceta(req, res){
        try {
            const receta = await RecetaService.updateReceta(req.params.id, req.body);
            res.status(200).json(receta);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    },
    async deleteReceta(req, res){
        try {
            const receta = await RecetaService.deleteReceta(req.params.id);
            res.status(200).json(receta);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    }
};