const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class like extends Model {
        static associate(models) {
            models.like.belongTo(models.user, { foreignKey: 'user_id' });
            models.like.belongTo(models.post, { foreignKey: 'post_id' });
        }
    }
    like.init(
        {
            likeId: {
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            user_id: DataTypes.INTEGER,
            post_id: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: 'like',
        }
    );
    return like;
};