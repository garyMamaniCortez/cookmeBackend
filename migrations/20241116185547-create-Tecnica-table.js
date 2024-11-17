'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tecnica', {
      id_tecnica: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nombre_tecnica: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion_tecnica: {
        type: Sequelize.STRING,
        allowNull: false
      },
      enlace_tutorial: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tecnica');     
  }
};
