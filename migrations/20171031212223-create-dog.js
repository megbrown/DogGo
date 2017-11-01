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
        type: Sequelize.DATE
      },
      dateAvailable: {
        type: Sequelize.DATE
      },
      chipNumber: {
        type: Sequelize.STRING
      },
      healthCertDate: {
        type: Sequelize.DATE
      },
      dappDate: {
        type: Sequelize.DATE
      },
      bordDate: {
        type: Sequelize.DATE
      },
      rabiesDate: {
        type: Sequelize.DATE
      },
      hwDate: {
        type: Sequelize.DATE
      },
      hwStatus: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      rideNotes: {
        type: Sequelize.STRING
      },
      status: {
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