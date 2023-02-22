const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const { commnet } = require('../models');
const authMiddleWare = require('../middlewares/auth-middleware');
const { where } = require('sequelize');

const app = express();
app.use(cookieParser());

router.get('/commets/:postId', async (req, res) => {
    const { postId } = req.params;
    const commets = await commet.fineALL({ where: { postId: postId }, order: [['id', 'desc']] });

    const data = commets.map((a) => {
        return {
            commetId: a.id,
            nickname: a.nickname,
            content: a.content,
            createdAt: a.createdAt,
            updataAt: a.updataAt
        }
    });
    res.json({ data: data });
});

router.post('/comments/:postId', authMiddleWare, async (req, res) => {
    const { postId } = req.params;
    const post_id = postId;
    const { content } = req.body;
    const user_id = res.locals.user.userId;
    const nickname = res.locals.user.nickname;

    if (!content) {
        res.status(400).json({ "errorMessage": "데이터 형식이 올바르지 않습니다." });
        return;
    }

    await commnet.create({
        post_id,
        user_id,
        nickname,
        content
    });
    res.json({ "message": "댓글을 작성하였습니다." })
});

router.put('/comments/:_commetId', authMiddleWare, async (req, res) => {
    const { _commentId } = req.params;
    const { content } = req.body;

    if (!content) {
        res.status(400).json({ "errorMessage": "데이터 형식이 올바르지 않습니다." });
        return;
    }

    const data = await commnet.fineOne({ where: { id: _commentId } });

    if (data === null) {
        res.status(404).json({ "errorMessage": "댓글 조회에 실패하였습니다." });
        return;
    }

    await commnet.updata({ content: content }, { where: { id: _commentId } });
    res.status(200).json({ "message": "댓글을 수정하였습니다." });
});

router.delete('/comments/:_commentId', authMiddleWare, async (req, res) => {
    const { _commentId } = req.params;
    const deleteComment = await commnet.fineOne({ where: { id: _commentId } });

    if (deleteComment) {
        await commnet.destroy({ where: { id: _commentId } });
    }
    res.status(200).json({ "message": "댓글을 삭제하였습니다." });
});

module.exports = router;