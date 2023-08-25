'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.addColumn('movies', 'director', {
      type: DataTypes.STRING
    })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.removeColumn('movies', 'director')

  }
};
