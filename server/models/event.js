'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    eventName: DataTypes.STRING,
    partyType: DataTypes.STRING,
    inviteNames: DataTypes.TEXT,
    numberOfInvites: DataTypes.INTEGER,
    foodType: DataTypes.STRING,
    place: DataTypes.STRING,
    band: DataTypes.STRING,
    eventTime: DataTypes.TIME,
    eventDate: DataTypes.DATE,
    address: DataTypes.STRING,
    eventSize: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};