const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const { User } = require("../models");

async function setPasswordToHash(req, res, next) {
    console.log("setPasswordToHash() access");
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

async function auth_middleware(req, res, next) {
    const token = req.cookies.jwt;

    try {
        const { userId } = jwt.verify(token, "SecretKey");
        User.findByPk(userId)
            .then((user) => {
                console.log(userId);
                res.locals.user = user.dataValues;
                next();
            });

    } catch {
        console.error.bind(console, "error:");
        res.status(400).json({ "errorMessage": "로그인이 필요합니다." })
    }

}



module.exports = { setPasswordToHash, auth_middleware };