'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('receta_ingrediente', {
      id_receta: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'receta',
          key: 'id_receta'
        }
      },
      id_ingrediente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'ingrediente',
          key: 'id_ingrediente'
        }
      }
    });    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('receta_ingrediente');
  }
};
