'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('buys', {
      fields: [ 'userId' ],
      type: 'foreign key',
      name: 'buy_user_association',
      references: {
        table: 'Users',
        field: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'buys',
      'buy_user_association'
    );
  }
};
