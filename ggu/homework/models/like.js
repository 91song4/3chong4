'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.like.belongTo(models.user, { foreignKey: 'user_id' });
      models.like.belongTo(models.post, { foreignKey: 'post_id' });
    }
  }
  Like.init({
    likeId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};