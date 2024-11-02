'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Propiedad_Ingrediente', {
      id_propiedad: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Propiedad',
          key: 'id_propiedad'
        }
      },
      id_ingrediente: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,        
        references: {
          model: 'Ingrediente',
          key: 'id_ingrediente'
        }
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Propiedad_Ingrediente');
  }
};
