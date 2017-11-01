'use strict';

const dogs = require('../data/dogs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dogs', dogs, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dogs', null, {});
  }
};
