const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class comment extends Model {
        static associate(models) {
            models.comment.belongsTo(models.post, { foreginKey: 'post_id' });
            models.comment.belongsTo(models.user, { foreginKey: 'user_id' });
        }
    }
    comment.init(
        {
            content: DataTypes.STRING,
            nickname: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'comment',
        }
    );
    return comment;
};