const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { Op } = require("sequelize");

const { auth_middleware } = require("./index.js");
const { User } = require("../models");

const router = express.Router();

// 회원가입
router.post("/", async (req, res) => {
    const { nickname, email, password, confirmPassword } = req.body;

    // 조건 검사
    let regExp = /^[a-zA-Z0-9]{3,}$/g;
    if (regExp.test(nickname) === false) {
        if (nickname.length < 3)
            return res.status(400).json({
                "errorMessage": "닉네임은 최소 3글자 이상입니다."
            });
        return res.status(400).json({
            "errorMessage": "닉네임은 알파벳과 숫자로 적어주세요."
        });
    }

    regExp = new RegExp(`^((?!${nickname}).){4,}$`, "g");
    if ((regExp.test(password) === false)) {
        if (password.length < 4)
            return res.status(400).json({
                "errorMessage": "비밀번호는 최소 4자 이상입니다."
            });
        return res.status(400).json({
            "errorMessage": "닉네임과 같은 값이 비밀번호에 포함 됐습니다."
        });
    }
    if (password !== confirmPassword) {
        return res.status(400).json({
            "errorMessage": "비밀번호가 일치하지 않습니다."
        });
    }

    const user = await User.findOne({
        where: {
            [Op.or]: [{ nickname }],
        },
    });

    if (user !== null) {
        return res.status(400).json({
            "errorMessage": "중복된 닉네임 입니다."
        });
    }
    const salt = crypto.randomBytes(128).toString("base64");
    const hash = crypto.createHash("sha512").update(password + salt).digest("hex");
    await User.create({ email, nickname, password: hash, salt });

    res.status(201).send();
})

router.get("/me", auth_middleware, (req, res) => {
    console.log(req.cookies);

    res.send("Hello");
})


module.exports = router;