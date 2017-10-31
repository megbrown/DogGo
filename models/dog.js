'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dog = sequelize.define('Dog', {
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    intakeType: DataTypes.STRING,
    intakeDate: DataTypes.STRING,
    dateAvailable: DataTypes.STRING,
    chipNumber: DataTypes.STRING,
    healthCertDate: DataTypes.STRING,
    dappDate: DataTypes.STRING,
    bordDate: DataTypes.STRING,
    rabiesDate: DataTypes.STRING,
    hwDate: DataTypes.STRING,
    hwStatus: DataTypes.STRING,
    description: DataTypes.STRING,
    notes: DataTypes.STRING,
    sourceShelterId: DataTypes.INTEGER,
    destinationShelterId: DataTypes.INTEGER,
    rideId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Dog;
};