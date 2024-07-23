'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ User }) {
      Event.belongsTo(User, { as: 'user', foreignKey: 'userId' });
    }
  }
  Event.init(
    {
      eventName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      partyType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      inviteNames: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      numberOfInvites: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      foodType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      place: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      band: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      eventTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      eventDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      eventSize: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Event',
    }
  );
  return Event;
};