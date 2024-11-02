'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Receta', {
      id_receta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_receta: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descripcion: {
        allowNull: false,
        type: Sequelize.STRING
      },
      instrucciones: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tiempo_preparacion: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      tiempo_coccion: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      imagen: {
        allowNull: false,
        type: Sequelize.STRING // Ubicacion de la imagen
      },
      id_categoria: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categoria',
          key: 'id_categoria'
        }
      },
      id_usuario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuario',
          key: 'id_usuario'
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Receta');
  }
};
