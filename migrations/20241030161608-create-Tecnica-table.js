'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Tecnica', {
      id_tecnica: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_tecnica: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descripcion_tecnica: {
        allowNull: false,
        type: Sequelize.STRING
      },
      enlace_tutorial: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Tecnica');
  }
};
