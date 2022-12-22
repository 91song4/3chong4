const crypto = require("crypto");
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

function auth_middleware(req, res,next)  {
    const { authorization } = req.headers;
    const [authType, authToken] = authorization.split(" ");
    console.log([authType, authToken]);
    console.log(req.cookies);
    next();
}



module.exports = { setPasswordToHash };