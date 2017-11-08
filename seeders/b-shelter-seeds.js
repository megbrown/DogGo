'use strict';

const shelters = require('../data/shelters');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shelters', shelters, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shelters', null, {});
  }
};
