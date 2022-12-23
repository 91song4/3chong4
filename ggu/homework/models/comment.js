'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.comment.belongsTo(models.post, { foreginKey: 'post_id' });
      models.comment.belongsTo(models.user, { foreginKey: 'user_id' });
    }
  }
  Comment.init({
    commentId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    post_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    content: DataTypes.STRING,
    nickname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};