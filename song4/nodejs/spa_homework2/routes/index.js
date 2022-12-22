const crypto = require("crypto");
const { Op } = require("sequelize");

const { User } = require("../models");


async function setPasswordToHash(req, res, next) {
    const { nickname, password } = req.body;
    const userObject = await User.findOne({
        where: { nickname },
    });

    if (userObject === null) {
        return res.status(400).json({
            "errorMessage": "이메일을 확인해주세요."
        });
    }
    const user = userObject.dataValues;
    const hash = crypto.createHash("sha512").update(password + user.salt).digest("hex");

    req.body.password = hash;
    res.locals.user = user;
    console.log("setPasswordToHash -> next()");
    next();
}

async function auth_middleware(req, res,next)  {
    console.log(req.params);
    const token = req.cookies.jwt;
    const userObject = await User.find
    console.log(token);
    next();
}



module.exports = { setPasswordToHash, auth_middleware };