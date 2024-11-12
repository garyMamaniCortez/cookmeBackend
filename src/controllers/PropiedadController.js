const PropiedadService = require('../services/PropiedadService');

module.exports = {
    async createPropiedad(req, res){
        try {
            const propiedad = await PropiedadService.createPropiedad(req.body);
            res.status(201).json(propiedad);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    },
    async getPropiedades(req, res){
        try {
            const propiedades = await PropiedadService.getAllPropiedades();
            res.status(200).json(propiedades);
        }catch (error){
            res.status(400).json({error: 'Error al obtener propiedades'});
        }
    },
    async getPropiedadById(req, res){
        try {
            const propiedad = await PropiedadService.getPropiedadById(req.params.id);
            res.status(200).json(propiedad);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    },
    async updatePropiedad(req, res){
        try {
            const propiedad = await PropiedadService.updatePropiedad(req.params.id, req.body);
            res.status(200).json(propiedad);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    },
    async deletePropiedad(req, res){
        try {
            const propiedad = await PropiedadService.deletePropiedad(req.params.id);
            res.status(200).json(propiedad);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    }
};