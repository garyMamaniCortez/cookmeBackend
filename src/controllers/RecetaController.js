const RecetaService = require('../services/RecetaService');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.js')[env];

module.exports = {
    async createReceta(req, res){
        try {
            console.log(req.file);
            const { nombre_receta, descripcion, instrucciones, tiempo_preparacion, tiempo_coccion, id_categoria, id_usuario } = req.body;
            const imagen = req.file ? req.file.path : null;
            const receta = await RecetaService.createReceta({ nombre_receta, descripcion, instrucciones, tiempo_preparacion, tiempo_coccion, imagen, id_categoria, id_usuario });
            res.status(201).json(receta);
        }
        catch (error){
            res.status(400).json({message: error.message});
        }
    },
    async getRecetas(req, res){
        try {
            const recetas = await RecetaService.getAllRecetas();
            const transformedRecetas = recetas.map(receta => {
                if (receta.imagen.includes("\\")){
                    receta.imagen = `${config.url}/api/uploads/${receta.id_receta}`;
                }
                return receta;
            });
            res.status(200).json(transformedRecetas);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    },
    async getRecetaById(req, res){
        try {
            const receta = await RecetaService.getRecetaById(req.params.id);
            if (receta.imagen.includes("\\")){
                receta.imagen = `${config.url}/api/uploads/${receta.id_receta}`;
            }
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
    },
    async searchReceta(req, res){
        try {
            const recetas = await RecetaService.searchReceta(req.body.query);
            const transformedRecetas = recetas.map(receta => {
                if (receta.imagen.includes("\\")){
                    receta.imagen = `${config.url}/api/uploads/${receta.id_receta}`;
                }
                return receta;
            });
            res.status(200).json(transformedRecetas);
        }catch (error){
            res.status(404).json({message: error.message});
        }
    },
    async getImageById(req, res){
        try {
            const receta = await RecetaService.getRecetaById(req.params.id);
    
            if (!receta) {
                return res.status(404).json({ message: 'Receta no encontrada' });
            }

            const imagePath = receta.imagen;
            res.sendFile(imagePath);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    async getRecetasByUserId(req, res){
        try {
            const recetas = await RecetaService.getUserRecetas(req.params.id);
            const transformedRecetas = recetas.map(receta => {
                if (receta.imagen.includes("\\")){
                    receta.imagen = `${config.url}/api/uploads/${receta.id_receta}`;
                }
                return receta;
            });
            res.status(200).json(transformedRecetas);
        }catch (error){
            res.status(400).json({message: error.message});
        }
    }
};