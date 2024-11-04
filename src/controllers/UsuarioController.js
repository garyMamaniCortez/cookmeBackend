const UsuarioService = require('../services/UsuarioService');

module.exports = {
    async createUsuario(req, res){
        try {
            const usuario = await UsuarioService.createUsuario(req.body);
            res.status(201).json(usuario);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    },
    async getUsuarios(req, res){
        try {
            const usuarios = await UsuarioService.getAllUsuarios();
            res.status(200).json(usuarios);
        }catch (error){
            res.status(400).json({error: 'Error al obtener usuarios'});
        }
    },
    async getUsuarioById(req, res){
        try {
            const usuario = await UsuarioService.getUsuarioById(req.params.id);
            res.status(200).json(usuario);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    },
    async updateUsuario(req, res){
        try {
            const usuario = await UsuarioService.updateUsuario(req.params.id, req.body);
            res.status(200).json(usuario);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    },
    async deleteUsuario(req, res){
        try {
            const usuario = await UsuarioService.deleteUsuario(req.params.id);
            res.status(200).json(usuario);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    }
};