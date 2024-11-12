const CategoriaService = require('../services/CategoriaService');

module.exports = {
    async createCategoria(req, res){
        try {
            const categoria = await CategoriaService.createCategoria(req.body);
            res.status(201).send(categoria);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async getAllCategorias(req, res){
        try {
            const categorias = await CategoriaService.getAllCategorias();
            res.status(200).send(categorias);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async getCategoriaById(req, res){
        try {
            const categoria = await CategoriaService.getCategoriaById(req.params.id);
            res.status(200).send(categoria);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async updateCategoria(req, res){
        try {
            await CategoriaService.updateCategoria(req.params.id, req.body);
            res.status(204).send();
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async deleteCategoria(req, res){
        try {
            await CategoriaService.deleteCategoria(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    }
}