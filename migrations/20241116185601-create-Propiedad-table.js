'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('propiedad', { 
      id_propiedad: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nombre_propiedad: {
        type: Sequelize.STRING,
        allowNull: false
      },        
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('propiedad');
  }
};
