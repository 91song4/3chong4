const express = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { Op } = require("sequelize");
const {setPasswordToHash} = require("./");

const { User } = require("../models");

const router = express.Router();

router.post("/", setPasswordToHash, (req, res) => {
    console.log("/api/auth last middleware access");
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
})

module.exports = router;