const {Tecnica} = require('../../models');

module.exports = {
    async CreateTecnica(){
        return await Tecnica.create({
            nombre_tecnica: 'nombre',
            descripcion_tecnica: 'descripcion',
            enlace_tutorial: 'enlace'
        });
    },
    async FindAllTecnicas(){
        return await Tecnica.findAll();
    },
    async FindTecnicaById(id){
        return await Tecnica.findByPk(id);
    },
    async UpdateTecnica(id){
        return await Tecnica.update({
            nombre_tecnica: 'nombre',
            descripcion_tecnica: 'descripcion',
            enlace_tutorial: 'enlace'
        },{
            where: {
                id_tecnica: id
            }
        });
    },
    async DeleteTecnica(id){
        return await Tecnica.destroy({
            where: {
                id_tecnica: id
            }
        });
    }
};