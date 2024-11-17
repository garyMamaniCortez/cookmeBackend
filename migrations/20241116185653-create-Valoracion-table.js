'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('valoracion', {
      id_valoracion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_receta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'receta',
          key: 'id_receta'
        }
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id_usuario'
        }
      },
      valoracion: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('valoracion');
  }
};
