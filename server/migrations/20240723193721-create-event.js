'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventName: {
        type: Sequelize.STRING
      },
      partyType: {
        type: Sequelize.STRING
      },
      inviteNames: {
        type: Sequelize.TEXT
      },
      numberOfInvites: {
        type: Sequelize.INTEGER
      },
      foodType: {
        type: Sequelize.STRING
      },
      place: {
        type: Sequelize.STRING
      },
      band: {
        type: Sequelize.STRING
      },
      eventTime: {
        type: Sequelize.TIME
      },
      eventDate: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING
      },
      eventSize: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};