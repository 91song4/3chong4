const express = require("express");
const crypto = require("crypto");

const { validateToken } = require("./index.js");
const { User } = require("../models");

const router = express.Router();

// 회원가입
router.post("/", async (req, res) => {
    console.log('회원가입 API');
    if (!(validateToken(req.cookies.jwt) === false))
        return res.status(403).json({ "errorMessage": "이미 로그인이 되어있습니다." });
    const { nickname, email, password, confirm } = req.body;

    // 조건 검사
    let regExp = /^[a-zA-Z0-9]{3,}$/g;
    if (regExp.test(nickname) === false) {
        if (nickname.length < 3)
            return res.status(412).json({
                "errorMessage": "ID는 3글자 이상입니다."
            });
        return res.status(412).json({
            "errorMessage": "ID의 형식이 일치하지 않습니다."
        });
    }

    regExp = new RegExp(`^((?!${nickname}).){4,}$`, "g");
    if ((regExp.test(password) === false)) {
        if (password.length < 4)
            return res.status(412).json({
                "errorMessage": "비밀번호는 최소 4자 이상입니다."
            });
        return res.status(412).json({
            "errorMessage": "닉네임과 같은 값이 비밀번호에 포함 됐습니다."
        });
    }
    if (password !== confirm) {
        return res.status(412).json({
            "errorMessage": "패스워드가 일치하지 않습니다."
        });
    }

    const user = await User.findOne({
        where: { nickname },
    });

    if (user !== null) {
        return res.status(412).json({
            "errorMessage": "중복된 닉네임 입니다."
        });
    }

    const salt = crypto.randomBytes(128).toString("base64");
    const hash = crypto.createHash("sha512").update(password + salt).digest("hex");
    try {
        await User.create({ email, nickname, password: hash, salt });
        res.status(201).json({ "message": "회원 가입에 성공하였습니다." });
    } catch {
        return res.status(400).json({
            "errorMessage": "요청한 데이터 형식이 올바르지 않습니다."
        })
    }

})

module.exports = router;