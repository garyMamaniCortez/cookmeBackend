const PreferenciaCulinariaService = require('../services/PreferenciaCulinariaService')

module.exports = {
    async createPreferenciaCulinaria(req, res) {
        try {
            const preferenciaCulinaria = await PreferenciaCulinariaService.createPreferenciaCulinaria(req.body)
            res.status(201).send(preferenciaCulinaria)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    async getPreferenciasCulinarias(req, res) {
        try {
            const preferenciasCulinarias = await PreferenciaCulinariaService.getPreferenciasCulinarias()
            res.status(200).send(preferenciasCulinarias)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    async getPreferenciaCulinariaPorUsuario(req, res) {
        try {
            const preferenciasCulinarias = await PreferenciaCulinariaService.getPreferenciaCulinariaPorUsuario(req.params.id_usuario)
            res.status(200).send(preferenciasCulinarias)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    async getPreferenciaCulinariaPorIngrediente(req, res) {
        try {
            const preferenciasCulinarias = await PreferenciaCulinariaService.getPreferenciaCulinariaPorIngrediente(req.params.id_ingrediente)
            res.status(200).send(preferenciasCulinarias)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    async getPreferenciaCulinaria(req, res) {
        try {
            const preferenciaCulinaria = await PreferenciaCulinariaService.getPreferenciaCulinaria(req.params.id_usuario, req.params.id_ingrediente)
            if (preferenciaCulinaria) {
                res.status(200).send(preferenciaCulinaria)
            } else {
                res.status(404).send({ message: 'Preferencia culinaria no encontrada' })
            }
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    async updatePreferenciaCulinaria(req, res) {
        try {
            const preferenciaCulinaria = await PreferenciaCulinariaService.updatePreferenciaCulinaria(req.params.id_usuario, req.params.id_ingrediente, req.body)
            if (preferenciaCulinaria) {
                res.status(200).send(preferenciaCulinaria)
            } else {
                res.status(404).send({ message: 'Preferencia culinaria no encontrada' })
            }
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    async deletePreferenciaCulinaria(req, res) {
        try {
            const preferenciaCulinaria = await PreferenciaCulinariaService.deletePreferenciaCulinaria(req.params.id_usuario, req.params.id_ingrediente)
            if (preferenciaCulinaria) {
                res.status(204).send()
            } else {
                res.status(404).send({ message: 'Preferencia culinaria no encontrada' })
            }
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
};