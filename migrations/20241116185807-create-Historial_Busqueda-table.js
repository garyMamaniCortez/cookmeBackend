'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('historial_busqueda', {
      id_historial_busqueda: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id_usuario'
        }
      },
      id_receta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'receta',
          key: 'id_receta'
        }
      },
      busqueda: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('historial_busqueda');
  }
};
