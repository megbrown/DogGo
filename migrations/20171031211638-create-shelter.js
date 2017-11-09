'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shelters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shelterName: {
        type: Sequelize.STRING
      },
      streetAddress: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.STRING
      },
      mileage: {
        type: Sequelize.INTEGER
      },
      driveTime: {
        type: Sequelize.STRING
      },
      restrictions: {
        type: Sequelize.STRING(1000)
      },
      preferences: {
        type: Sequelize.STRING(1000)
      },
      alters: {
        type: Sequelize.STRING
      },
      deliveryPreferences: {
        type: Sequelize.STRING(1000)
      },
      transportVan: {
        type: Sequelize.STRING
      },
      adoptionSpeed: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      contactName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING(1000)
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shelters');
  }
};