const IngredienteService = require('../services/IngredienteService');

module.exports = {
    async createIngrediente(req, res) {
        try {
            const ingrediente = await IngredienteService.createIngrediente(req.body)
            res.status(201).send(ingrediente)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    async getAllIngrediente(req, res) {
        try {
            const ingredientes = await IngredienteService.getAllIngrediente()
            res.status(200).send(ingredientes)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    async getIngrediente(req, res) {
        try {
            const ingrediente = await IngredienteService.getIngrediente(req.params.id)
            if (ingrediente) {
                res.status(200).send(ingrediente)
            } else {
                res.status(404).send({ message: 'Ingrediente no encontrado' })
            }
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    async updateIngrediente(req, res) {
        try {
            const ingrediente = await IngredienteService.updateIngrediente(req.params.id, req.body)
            if (ingrediente) {
                res.status(200).send(ingrediente)
            } else {
                res.status(404).send({ message: 'Ingrediente no encontrado' })
            }
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    async deleteIngrediente(req, res) {
        try {
            const ingrediente = await IngredienteService.deleteIngrediente(req.params.id)
            if (ingrediente) {
                res.status(204).send()
            } else {
                res.status(404).send({ message: 'Ingrediente no encontrado' })
            }
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
};