const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

module.exports = async (req, res, next) => {
    const { authorization } = req.headers;
    const [authType, authToken] = authorization.split(" ");

    if (authType !== "Bearer" || authToken === null) {
        return res.status(400).json({ "errorMessage": "로그인 후 사용이 가능한 API입니다." });
    }

    try {
        const {userId} = jwt.verify(authToken, "sparta-secret-key");
        const user = await User.findById( userId );
        res.locals.user = user;
        next();
    } catch (error) {
        return res.status(400).json({ "errorMessage": "로그인 후 사용이 가능한 API 입니다." });        
    }
}