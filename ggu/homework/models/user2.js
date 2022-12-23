const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            models.user.hasMany(model.comment, { foreignKey: 'user_id' });
            models.user.hasMany(model.post, { foreignKey: 'user_id' });
            models.user.hasMany(model.like, { foreignKey: 'user_id' });
        }
    }
    User.init({
        userId: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nickname: DataTypes.STRING,
        password: DataTypes.STRING
    },
        {
            sequelize, odelName: 'user'
        });
    return User;
};