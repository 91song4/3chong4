const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { Op } = require("sequelize");
const {setPasswordToHash} = require("./");
const { auth_middleware } = require("./index.js");

const { User } = require("../models");

const router = express.Router();

router.post("/", setPasswordToHash, (req, res) => {
    console.log("로그인 API");
    if (req.cookies.jwt !== undefined) {
        return res.status(400).json({"errorMessage": "이미 로그인이 되어있습니다."});
    }
    const { password } = req.body;
    const user = res.locals.user;
    
    if (password !== user.password) {
        return res.status(400).json({
            "errorMessage":"패스워드를 확인해주세요."
        })
    }
    
    const token = jwt.sign(
        { userId: user.userId },
        "SecretKey",
        { expiresIn: "1m" }
    )
    
    res.status(200).cookie('jwt', token).json({ token });
    // res.end();
})

module.exports = router;