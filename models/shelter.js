'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shelter = sequelize.define(
    'Shelter',
    {
      shelterName: DataTypes.STRING,
      streetAddress: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipCode: DataTypes.STRING,
      mileage: DataTypes.INTEGER,
      driveTime: DataTypes.STRING,
      restrictions: DataTypes.STRING,
      preferences: DataTypes.STRING,
      alters: DataTypes.STRING,
      deliveryPreferences: DataTypes.STRING,
      transportVan: DataTypes.STRING,
      adoptionSpeed: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      contactName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      notes: DataTypes.STRING,
      role: DataTypes.STRING
    }
  );

  Shelter.associate = models => {
    Shelter.hasMany(models.Dog, {
      foreignKey: 'sourceShelterId'
    });
  };

  Shelter.associate = models => {
    Shelter.hasMany(models.Dog, {
      foreignKey: 'destinationShelterId'
    });
  };

  return Shelter;
};