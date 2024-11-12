const TecnicaService = require('../services/TecnicaService');

module.exports = {
    async createTecnica(req, res){
        try {
            const tecnica = await TecnicaService.CreateTecnica();
            res.status(201).send(tecnica);
        } catch (error) {
            res.status(400).send
        }
    },
    async findAllTecnicas(req, res){
        try {
            const tecnicas = await TecnicaService.FindAllTecnicas();
            res.status(200).send(tecnicas);
        } catch (error) {
            res.status(400).send
        }
    },
    async findTecnicaById(req, res){
        try {
            const tecnica = await TecnicaService.FindTecnicaById(req.params.id);
            res.status(200).send(tecnica);
        } catch (error) {
            res.status(400).send
        }
    },
    async updateTecnica(req, res){
        try {
            const tecnica = await TecnicaService.UpdateTecnica(req.params.id);
            res.status(200).send(tecnica);
        } catch (error) {
            res.status(400).send
        }
    },
    async deleteTecnica(req, res){
        try {
            const tecnica = await TecnicaService.DeleteTecnica(req.params.id);
            res.status(200).send(tecnica);
        } catch (error) {
            res.status(400).send
        }
    }
};