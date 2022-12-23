const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const { like, post } = require('../models');
const authMiddleWare = require('../middlewares/auth-MiddleWare');

const app = express();
app.use(cookieParser());

router.get('/likes/post', authMiddleWare, async (req, res) => {
    const user_id = req.locals.user.userId;
    const data = await like.findALL({
        where: { user_id: user_id },
        raw: true,
        attributes: [
            'user_id',
            'post_id',
            'post.title',
            'post.content',
            'post.like_count',
            'post.createdAt'
        ],
        include: [
            { model: post, getlist[]}
        ],
        order: [[post, 'like_count', 'desc']]
    });
    res.status(200).json({ data });
});

router.put('/posts/:_postId/like', authMiddleWare, async (req, res) => {
    const { _postId: post_id } = req.params;
    const user_id = res.locals.user.userId;

    const existsPost = await like.findOne({
        where: { post_id: post_id, user_id: user_id }
    });

    if (!existsPost) {
        await like.create({
            post_id,
            user_id
        });
        await post.increment({ like_count: 1 }, { where: { postId: post_id } });
        res.status(200).json({ "message": "게시글의 좋아요를 등록하였습니다." });
        return;
    }

    await post.decrement({ like_count: 1 }, { where: { postId: post_id } });
    await like.destroy({ where: { post_id: [post_id] } });
    res.status(200).json({ "message": "게시글의 좋아요를 취소하였습니다." });
});

module.exports = router