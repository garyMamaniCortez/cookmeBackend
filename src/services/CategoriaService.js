const {categoria} = require('../../models');

module.exports = {
    async createCategoria(datosCategoria){
        return categoria.create(datosCategoria);
    },
    async getAllCategorias(){
        return categoria.findAll();
    },
    async getCategoriaById(id){
        return categoria.findByPk(id);
    },
    async updateCategoria(id, datosCategoria){
        return categoria.update(datosCategoria, {
            where: {
                id_categoria: id
            }
        });
    },
    async deleteCategoria(id){
        return categoria.destroy({
            where: {
                id_categoria: id
            }
        });
    }
}