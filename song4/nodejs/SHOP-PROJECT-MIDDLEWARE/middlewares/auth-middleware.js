const jwt = require('jsonwebtoken');
const {User} = require('../models');

module.exports = async (req, res, next) => {
    const { authorization } = req.headers;
    const [authType, authToken] = authorization.split(" ");

    if (authType !== "Bearer" || authToken === null) {
        return res.status(400).json({ "errorMessage": "로그인 후 사용이 가능한 API입니다." });
    }

    try {
        const { userId } = jwt.verify(authToken, "sparta-secret-key");
        
        User.findByPk(userId).then((user) => {
            res.locals.user = user.dataValues;
            next();
        });
        // User.findById(userId).then((user) => {
        //     res.locals.user = user;
        //     next();
        // })
    } catch (error) {
        console.error.bind(console, "error:");
        return res.status(400).json({ "errorMessage": "로그인 후 사용이 가능한 API 입니다." });
    }
}