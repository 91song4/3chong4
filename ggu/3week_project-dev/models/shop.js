"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.shop.hasMany(models.wash_list, { foreignKey: "shop_id" });
    }
  }
  shop.init(
    {
      shop_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      shop_name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      shop_number: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      point: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      shop_status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "shop",
    }
  );
  return shop;
};
