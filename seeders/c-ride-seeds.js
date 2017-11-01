'use strict';

const rides = require('../data/rides');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rides', rides, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rides', null, {});
  }
};
