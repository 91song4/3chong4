const express = require("express");

const { Post } = require("../models");

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { title, content } = req.body;

        if (title == undefined) {
            return res.status(412).json({
                errorMessage: "게시글 제목의 형식이 일치하지 않습니다."
            });
        }
        if (content == undefined) {
            return res.status(412).json({
                errorMessage: "게시글 내용의 형식이 일치하지 않습니다."
            });
        }

        try {
            const {userId} = res.locals.user;

            await Post.create({ title, content, userId });
            res.status(200).json({ "message": "게시글 작성에 성공하였습니다." });
        } catch(err) {
            return res.status(400).json({
                errorMessage: "게시글 작성에 실패하였습니다."
            });
        }
    } catch {
        return res.status(412).json({
            errorMessage: "데이터 형식이 올바르지 않습니다."
        });
    }
});


module.exports = router;