'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(model.comment, { foreignKey: 'user_id' });
      models.user.hasMany(model.post, { foreignKey: 'user_id' });
      models.user.hasMany(model.like, { foreignKey: 'user_id' });
    }
  }
  User.init({
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nickname: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};