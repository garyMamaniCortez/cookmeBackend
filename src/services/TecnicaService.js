const {tecnica} = require('../../models');

module.exports = {
    async CreateTecnica(datosTecnica){
        return tecnica.create(datosTecnica);
    },
    async FindAllTecnicas(){
        return await tecnica.findAll();
    },
    async FindTecnicaById(id){
        return await tecnica.findByPk(id);
    },
    async UpdateTecnica(id, datosTecnica){
        return await tecnica.update(datosTecnica, {
            where: {
                id_tecnica: id
            }
        });
    },
    async DeleteTecnica(id){
        return await tecnica.destroy({
            where: {
                id_tecnica: id
            }
        });
    }
};