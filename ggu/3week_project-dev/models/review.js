"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.review.belongsTo(models.user, { foreignKey: "user_id" });
    }
  }
  review.init(
    {
      review_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING(500),
      },
      star_rating: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING(500),
      },
      shop_name: {
        allowNull: false,
        type: DataTypes.STRING(500),
      },
    },
    {
      sequelize,
      modelName: "review",
    }
  );
  return review;
};
