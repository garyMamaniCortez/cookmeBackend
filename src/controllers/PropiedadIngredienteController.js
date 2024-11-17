const PropiedadIngredienteService = require('../services/PropiedadIngredienteService');

module.exports = {
    async createPropiedadIngrediente(req, res) {
        try {
            const propiedad_ingrediente = await PropiedadIngredienteService.createPropiedadIngrediente(req.body);
            res.status(201).send(propiedad_ingrediente);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async getAllPropiedadIngredientes(req, res) {
        try {
            const propiedad_ingredientes = await PropiedadIngredienteService.getAllPropiedadIngredientes();
            res.status(200).send(propiedad_ingredientes);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async getPropiedadIngredientePorPropiedad(req, res) {
        try {
            const propiedad_ingredientes = await PropiedadIngredienteService.getPropiedadIngredientePorPropiedad(req.params.id_propiedad);
            res.status(200).send(propiedad_ingredientes);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async getPropiedadIngredientePorIngrediente(req, res) {
        try {
            const propiedad_ingredientes = await PropiedadIngredienteService.getPropiedadIngredientePorIngrediente(req.params.id_ingrediente);
            res.status(200).send(propiedad_ingredientes);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async getPropiedadIngrediente(req, res) {
        try {
            const propiedad_ingrediente = await PropiedadIngredienteService.getPropiedadIngrediente(req.params.id_propiedad, req.params.id_ingrediente);
            res.status(200).send(propiedad_ingrediente);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async updatePropiedadIngrediente(req, res) {
        try {
            const propiedad_ingrediente = await PropiedadIngredienteService.updatePropiedadIngrediente(req.params.id_propiedad, req.params.id_ingrediente, req.body);
            res.status(200).send(propiedad_ingrediente);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async deletePropiedadIngrediente(req, res) {
        try {
            await PropiedadIngredienteService.deletePropiedadIngrediente(req.params.id_propiedad, req.params.id_ingrediente);
            res.status(204).send();
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    }
};