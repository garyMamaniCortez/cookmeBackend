'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Historial_Busqueda', {
      id_usuario: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuario',
          key: 'id_usuario'
        }
      },
      id_receta: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Receta',
          key: 'id_receta'
        }
      },
      busqueda: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fecha: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('Historial_Busqueda');    
  }
};
