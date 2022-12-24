const express = require("express");

const {Comment} = require("../models");

const { auth_middleware } = require("./index.js");

const router = express.Router();

router.post('/', auth_middleware, async (req, res) => {
    console.log('댓글작성 API');
    const temp = req.baseUrl.split("/");
    const postId = Number(temp[temp.length - 2]);
    const user = res.locals.user;
    const { comment } = req.body;

    if (comment.trim() === "") {
        res.status(412).json({ errorMessage: "댓글 내용을 입력해주세요." })
    }
    console.log(user);

    try {
        await Comment.create({ comment, postId, userId: user.userId });
        res.status(200).json({ message: "댓글을 작성하였습니다." });
    } catch(err) {
        console.error(err, "Error:");
        res.status(400).json({ message: "댓글 작성에 실패하였습니다." });
    }
})

module.exports = router;