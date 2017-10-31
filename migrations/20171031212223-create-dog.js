'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Dogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      sex: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.INTEGER
      },
      intakeType: {
        type: Sequelize.STRING
      },
      intakeDate: {
        type: Sequelize.STRING
      },
      dateAvailable: {
        type: Sequelize.STRING
      },
      chipNumber: {
        type: Sequelize.STRING
      },
      healthCertDate: {
        type: Sequelize.STRING
      },
      dappDate: {
        type: Sequelize.STRING
      },
      bordDate: {
        type: Sequelize.STRING
      },
      rabiesDate: {
        type: Sequelize.STRING
      },
      hwDate: {
        type: Sequelize.STRING
      },
      hwStatus: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      sourceShelterId: {
        type: Sequelize.INTEGER
      },
      destinationShelterId: {
        type: Sequelize.INTEGER
      },
      rideId: {
        type: Sequelize.INTEGER
      },
      status: {
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
    return queryInterface.dropTable('Dogs');
  }
};