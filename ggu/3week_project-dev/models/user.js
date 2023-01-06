"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.review, { foreignKey: "user_id" });
      models.user.hasMany(models.wash_list, { foreignKey: "user_id" });
    }
  }
  user.init(
    {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nickname: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING(500),
      },
      phone_number: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      point: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1000000,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
