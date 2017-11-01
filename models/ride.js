'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ride = sequelize.define(
    'Ride',
    {
      date: DataTypes.DATE,
      complete: DataTypes.BOOLEAN
    }
  );

  Ride.associate = models => {
    Ride.hasMany(models.Dog, {
      foreignKey: 'rideId'
    });
  };

  return Ride;
};