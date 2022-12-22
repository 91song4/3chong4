const express = require("express");
const jwt = require("jsonwebtoken");

const { setPasswordToHash } = require("./index.js");
const { validateToken } = require("./index.js");

const router = express.Router();

router.post("/", setPasswordToHash, (req, res) => {
    console.log("로그인 API");
    if (!(validateToken(req.cookies.jwt) === false))
        return res.status(403).json({ "errorMessage": "이미 로그인이 되어있습니다." });

    const { password } = req.body;
    const user = res.locals.user;
    if (password !== user.password) {
        return res.status(412).json({
            "errorMessage": "패스워드를 확인해주세요."
        })
    }

    const token = jwt.sign(
        { userId: user.userId },
        "SecretKey",
        { expiresIn: "1m" }
    )

    res.status(200).cookie('jwt', token).json({ token });

})

module.exports = router;