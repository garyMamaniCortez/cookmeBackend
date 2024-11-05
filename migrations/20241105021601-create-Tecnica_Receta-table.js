'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Tecnica_Receta', {
      id_tecnica: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Tecnica',
          key: 'id_tecnica'
        }
      },
      id_receta: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Receta',
          key: 'id_receta'
        }
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Tecnica_Receta');
  }
};
