const express = require("express");

const { Post } = require("../models");
const { User } = require("../models");
const { auth_middleware } = require("./index.js");

const router = express.Router();

router.post('/', auth_middleware, async (req, res) => {
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
            const { userId } = res.locals.user;

            await Post.create({ title, content, userId });
            res.status(200).json({ "message": "게시글 작성에 성공하였습니다." });
        } catch (err) {
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

router.get('/', async (req, res) => {
    try {
        // console.log(await User.findAll({ include: Post }));

        const [posts] = await Post.findAll({
            raw: true,
            include: [
                {
                    model: User,
                    attributes: ['nickname']
                }
            ],
            attributes: ["postId", "title", "createdAt", "updatedAt", "likes"],
        });
if (posts.length < 1) {
    throw new Error();
}
console.log(posts);

res.json({ "data": "데이터들!" });

    } catch (err) {
    console.log(err);
    res.status(400).json({ errorMessage: "게시글 조회에 실패하였습니다." });
}
});


module.exports = router;