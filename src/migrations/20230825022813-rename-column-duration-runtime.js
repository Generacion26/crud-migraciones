'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.renameColumn("movies", "duration", "runtime")
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.renameColumn("movies", "runtime", "duration")
  }
};
