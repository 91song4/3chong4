const jwt = require('jsonwebtoken');
const SECRET_KEY = 'homework';
const { user } = require('../models');

module.exports = (req, res, next) => {
    const { cookie } = req.headers;
    console.log(req.headers);
    const [authType, authToken] = (cookie || '').split('=');

    if (!authToken || authType !== 'token') {
        res.status(400).send({ "errorMessage": '로그인이 필요합니다.' });
        return;
    }

    try {
        const { userId } = jwt.verify(authToken, SECRET_KEY);
        user.findByPk(userId).then((user) => {
            res.locals.user = user;
            next();
        });
    } catch (error) {
        res.status(400).send({ "errorMessage": '이미 로그인이 되어있습니다.' });
    }
};