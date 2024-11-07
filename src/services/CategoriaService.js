const {Categoria} = require('../../models');

module.exports = {
    async createCategoria(categoria){
        return Categoria.create(categoria);
    },
    async getAllCategorias(){
        return Categoria.findAll();
    },
    async getCategoriaById(id){
        return Categoria.findByPk(id);
    },
    async updateCategoria(id, categoria){
        return Categoria.update(categoria, {
            where: {
                id_categoria: id
            }
        });
    },
    async deleteCategoria(id){
        return Categoria.destroy({
            where: {
                id_categoria: id
            }
        });
    }
}