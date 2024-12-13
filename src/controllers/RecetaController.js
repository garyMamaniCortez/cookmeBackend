const RecetaService = require('../services/RecetaService');
const RecetaIngredienteService = require('../services/RecetaIngredienteService');
const IngredienteService = require('../services/IngredienteService');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.js')[env];

module.exports = {
    async createReceta(req, res){
        try {
            console.log(req.file);
            const { nombre_receta, descripcion, instrucciones, tiempo_preparacion, tiempo_coccion, id_categoria, id_usuario, ingredientes } = req.body;
            const imagen = req.file ? req.file.path : null;
            const receta = await RecetaService.createReceta({ nombre_receta, descripcion, instrucciones, tiempo_preparacion, tiempo_coccion, imagen, id_categoria, id_usuario });
            if (receta){
                const ingredientesArray = ingredientes.split(',').map(ing => ing.trim());

                for (const nombreIngrediente of ingredientesArray) {
                    const ingrediente = await RecetaIngredienteService.getRecetaIngredienteByNombreIngrediente(nombreIngrediente);
                    if(ingrediente)
                        await RecetaIngredienteService.createRecetaIngrediente({ "id_receta": receta.id_receta, "id_ingrediente": ingrediente.id_ingrediente});
                    else{
                        const nuevo_ingrediente = await IngredienteService.createIngrediente({ "nombre_ingrediente": nombreIngrediente });
                        await RecetaIngredienteService.createRecetaIngrediente({ "id_receta": receta.id_receta, "id_ingrediente": nuevo_ingrediente.id_ingrediente});
                    }
                }
            }
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
            receta.dataValues.ingredientes = receta['receta-ingredientes'].map(ri => ri.ingrediente.nombre_ingrediente).join(', ');
            delete receta.dataValues['receta-ingredientes'];
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