const ComentarioService = require('../services/ComentarioService');

module.exports = {
    async createComentario(req, res){
        try {
            const comentario = await ComentarioService.createComentario(req.body);
            res.status(201).json(comentario);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    },
    async getComentarios(req, res){
        try {
            const comentarios = await ComentarioService.getAllComentarios();
            res.status(200).json(comentarios);
        }catch (error){
            res.status(400).json({error: 'Error al obtener comentarios'});
        }
    },
    async getComentarioById(req, res){
        try {
            const comentario = await ComentarioService.getComentarioById(req.params.id);
            res.status(200).json(comentario);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    },
    async updateComentario(req, res){
        try {
            const comentario = await ComentarioService.updateComentario(req.params.id, req.body);
            res.status(200).json(comentario);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    },
    async deleteComentario(req, res){
        try {
            const comentario = await ComentarioService.deleteComentario(req.params.id);
            res.status(200).json(comentario);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    }
};