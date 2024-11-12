const ValoracionServices = require('../services/ValoracionService');

module.exports = {
    async createValoracion(req, res){
        try {
            const valoracion = await ValoracionServices.createValoracion(req.body);
            res.status(201).send(valoracion);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async getAllValoraciones(req, res){
        try {
            const valoraciones = await ValoracionServices.getAllValoraciones();
            res.status(200).send(valoraciones);
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async getValoracionById(req, res){
        try {
            const valoracion = await ValoracionServices.getValoracionById(req.params.id);
            if(valoracion){
                res.status(200).send(valoracion);
            }else{
                res.status(404).send({message: 'Valoración no encontrada'});
            }
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async updateValoracion(req, res){
        try {
            const valoracion = await ValoracionServices.updateValoracion(req.params.id, req.body);
            if(valoracion[0]){
                res.status(200).send({message: 'Valoración actualizada'});
            }else{
                res.status(404).send({message: 'Valoración no encontrada'});
            }
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    },
    async deleteValoracion(req, res){
        try {
            const valoracion = await ValoracionServices.deleteValoracion(req.params.id);
            if(valoracion){
                res.status(200).send({message: 'Valoración eliminada'});
            }else{
                res.status(404).send({message: 'Valoración no encontrada'});
            }
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    }
};