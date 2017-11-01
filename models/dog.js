'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dog = sequelize.define(
    'Dog',
    {
      name: DataTypes.STRING,
      breed: DataTypes.STRING,
      age: DataTypes.INTEGER,
      sex: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      intakeType: DataTypes.STRING,
      intakeDate: DataTypes.DATE,
      dateAvailable: DataTypes.DATE,
      chipNumber: DataTypes.STRING,
      healthCertDate: DataTypes.DATE,
      dappDate: DataTypes.DATE,
      bordDate: DataTypes.DATE,
      rabiesDate: DataTypes.DATE,
      hwDate: DataTypes.DATE,
      hwStatus: DataTypes.STRING,
      description: DataTypes.STRING,
      rideNotes: DataTypes.STRING,
      status: DataTypes.STRING,
      sourceShelterId: DataTypes.INTEGER,
      destinationShelterId: DataTypes.INTEGER,
      rideId: DataTypes.INTEGER,
    }
  );

  Dog.associate = models => {
    Dog.belongsTo(models.Ride, {
      foreignKey: 'id'
    });
  };

  Dog.associate = models => {
    Dog.belongsTo(models.Shelter, {
      foreignKey: 'id'
    });
  };

  return Dog;
};