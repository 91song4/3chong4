"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // review 테이블 user_id 생성
    await queryInterface.addColumn("reviews", "user_id", {
      allowNull: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("reviews", {
      fields: ["user_id"],
      type: "foreign key",
      name: "fk_reviews_user_id",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    // wash_list 테이블 user_id 생성
    await queryInterface.addColumn("wash_lists", "user_id", {
      allowNull: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("wash_lists", {
      fields: ["user_id"],
      type: "foreign key",
      name: "fk_wash_lists_user_id",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
