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
    async getPropiedadIngrediente(req, res) {
        try {
            const propiedad_ingrediente = await PropiedadIngredienteService.getPropiedadIngrediente(req.params.id_propiedad, req.params.id_ingrediente);
            res.status(200).send(propiedad_ingrediente);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async getIngredienteId(req, res) {
        try {
            const propiedad_ingrediente = await PropiedadIngredienteService.getIngredienteId(req.params.id_ingrediente);
            res.status(200).send(propiedad_ingrediente);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async getPropiedadId(req, res) {
        try {
            const propiedad_ingrediente = await PropiedadIngredienteService.getPropiedadId(req.params.id_propiedad);
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