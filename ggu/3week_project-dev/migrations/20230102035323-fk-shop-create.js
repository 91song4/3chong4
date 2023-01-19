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
    // wash_list 테이블 shop_id 생성
    await queryInterface.addColumn("wash_lists", "shop_id", {
      allowNull: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("wash_lists", {
      fields: ["shop_id"],
      type: "foreign key",
      name: "fk_wash_lists_shop_id",
      references: {
        table: "shops",
        field: "shop_id",
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

    await queryInterface.removeColumn("reviews", "user_id");
    await queryInterface.removeColumn("wash_lists", "user_id");
    await queryInterface.removeColumn("wash_lists", "shop_id");
  },
};
