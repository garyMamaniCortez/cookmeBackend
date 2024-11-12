const IngredienteService = require('../services/IngredienteService');

module.exports = {
    async createIngrediente(req, res){
        try {
            const ingrediente = await IngredienteService.createIngrediente(req.body);
            res.status(201).send(ingrediente);
        } catch (error) {
            console.log(error);
            res.status(500).send({message: 'Error al crear ingrediente'});
        }
    },
    async getAllIngredientes(req, res){
        try {
            const ingredientes = await IngredienteService.getAllIngredientes();
            res.status(200).send(ingredientes);
        } catch (error) {
            console.log(error);
            res.status(500).send({message: 'Error al obtener ingredientes'});
        }
    },
    async getIngredienteById(req, res){
        try {
            const ingrediente = await IngredienteService.getIngredienteById(req.params.id);
            if(ingrediente){
                res.status(200).send(ingrediente);
            } else {
                res.status(404).send({message: 'Ingrediente no encontrado'});
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({message: 'Error al obtener ingrediente'});
        }
    },
    async updateIngrediente(req, res){
        try {
            await IngredienteService.updateIngrediente(req.params.id, req.body);
            res.status(204).send();
        } catch (error) {
            console.log(error);
            res.status(500).send({message: 'Error al actualizar ingrediente'});
        }
    },
    async deleteIngrediente(req, res){
        try {
            await IngredienteService.deleteIngrediente(req.params.id);
            res.status(204).send();
        } catch (error) {
            console.log(error);
            res.status(500).send({message: 'Error al eliminar ingrediente'});
        }
    }
};