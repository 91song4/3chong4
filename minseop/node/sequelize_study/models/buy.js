'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      buy.belongsTo(models.User, {
        foreignKey: 'userId',
        as : 'user',
        onDelete:'NO ACTION'
      });
    }
  }
  buy.init({
    userId: DataTypes.INTEGER,
    buyName: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'buy',
  });
  return buy;
};