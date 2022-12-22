const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
            models.post.hasMany(models.comment, { foreignKey: 'post_id' });
            models.post.hasMany(models.like, { foreignKey: 'post_id' });
            models.post.belongTo(models.user, { foreignKey: 'post_id' });
        }
    }
    Post.init({
        postId: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        user_id: {
            type: DataTypes.INTEGER
        },
        like_cnt: DataTypes.INTEGER
    },
        {
            sequelize,
            modelName: 'post'
        });
    return Post;
};