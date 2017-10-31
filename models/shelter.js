'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shelter = sequelize.define('Shelter', {
    name: DataTypes.STRING,
    contactName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    dateAdded: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    mileage: DataTypes.INTEGER,
    driveTime: DataTypes.STRING,
    alters: DataTypes.STRING,
    adoptionSpeed: DataTypes.STRING,
    breedRest: DataTypes.STRING,
    preferences: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Shelter;
};