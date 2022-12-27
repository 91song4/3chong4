const express = require("express");
const { Op } = require("sequelize");

const { Post } = require("../models");
const { User } = require("../models");
const { Like } = require("../models");
const { auth_middleware } = require("./index.js");
const { getPostId } = require("./index.js");

const commentRouter = require("./comments.js");
const likeRouter = require("./likes.js");

const router = express.Router();

router.use("*/comments", getPostId, commentRouter);
router.use("*/likes", getPostId, likeRouter);

router.get("/", async (req, res) => {
    try {
        const posts = await Post.findAll({
            raw: true,
            include: [
                {
                    model: User,
                    attributes: []
                }
            ],
            attributes: [
                "postId",
                "userId",
                "User.nickname",
                // [Sequelize.literal("User.nickname"), "nickname"],
                "title",
                "createdAt",
                "updatedAt",
                "likes",
            ],
            order: [
                ["createdAt", "desc"],
            ],
        });

        if (posts.length < 1) {
            throw new Error();
        }

        return res.json({ "data": posts });

    } catch (err) {
        console.log(err);
        return res.status(400).json({ errorMessage: "게시글 조회에 실패하였습니다." });
    }
});

router.get('/:postId', async (req, res) => {
    try {
        const postId = parseInt(req.params.postId);
        const post = await Post.findOne({
            raw: true,
            where: { postId },
            include: [
                {
                    model: User,
                    attributes: []
                }
            ],
            attributes: [
                "postId",
                "userId",
                "User.nickname",
                "title",
                "content",
                "createdAt",
                "updatedAt",
                "likes",
            ],
        });

        if (!post) {
            throw new Error();
        }
        post.likes = 13;

        return res.json({ "data": post });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ errorMessage: "게시글 조회에 실패하였습니다." });
    }
})

router.post("/", auth_middleware, async (req, res) => {
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

router.put('/:postId', auth_middleware, async (req, res) => {
    console.log('게시글 수정 API');
    try {
        const postId = parseInt(req.params.postId);
        const { title, content } = req.body;
        if (!title) {
            return res.status(412).json({ errorMessage: "게시글 제목의 형식이 일치하지 않습니다." })
        }
        if (!content) {
            return res.status(412).json({ errorMessage: "게시글 내용의 형식이 일치하지 않습니다." })
        }
        const user = res.locals.user;

        console.log(postId);
        console.log(user);

        await Post.update({ title, content },
            {
                where: {
                    [Op.and]: [
                        { postId },
                        { userId: user.userId }
                    ]
                }
            });
        return res.status(200).json({ message: "게시글을 수정하였습니다." });
    } catch (err) {
        console.error(err, "Error:");
        return res.status(401).json({ errorMessage: "게시글 수정에 실패하였습니다." });
    }
})


router.delete('/:postId', auth_middleware, async (req, res) => {
    const { postId } = req.params;
    const user = res.locals.user;

    try {
        const destroyCnt = await Post.destroy({
            where: {
                [Op.and]: [{ postId }, { userId: user.userId }]
            }
        });
        if (destroyCnt < 1) {
            return res.status(404).json({ errorMessage: "게시글이 존재하지 않습니다." });
        }

        return res.status(200).json({ message: "게시글을 삭제하였습니다." })
    } catch (err) {
        console.error(err, "Error:");
        return res.status(401).json({ errorMessage: "게시글이 정상적으로 삭제되지 않았습니다." });
    }
})

module.exports = router;