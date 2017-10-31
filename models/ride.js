'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ride = sequelize.define('Ride', {
    date: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Ride;
};