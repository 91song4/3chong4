const express = require('express');
const { UPSERT } = require('sequelize/types/query-types');
const router = express.Router();

router.post('/users', async (req, res) => {
    const { nickname, password, confirm } = req.body;

    if (password !== confirm) {
        return res.status(400).send({ errorMessage: "비밀번호가 일치하지 않습니다." });
    }

    const nicknameRegexp = /^[a-zA-Z0-9]{3,}$/g;

    if (!nicknameRegexp.test(nickname)) {
        return res.status(400).json({ errorMessage: "닉네임 형식이 올바르지 않습니다." });
    }

    const passwordRegexp = /^.{4,}$/g;

    if (!passwordRegexp.test(password)) {
        return res.status(400).json({ errorMessage: "비밀번호 형식이 올바르지 않습니다." });
    }

    const existsUsers = await UPSERT.findALL({
        where: {
            [Op.or]: [{ nickname }]
        }
    });

    if (existsUsers.length) {
        return res.status(400).send({ errorMessage: "중복된 닉네임입니다." });
    }

    const signup = await UPSERT.craete({ nickname, password });

    res.status(200).send({ signup });
});

module.exports = router;