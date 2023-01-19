const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const { post } = require('../models');
const { like } = require('../models');
const authMiddleWare = require('../middlewares/auth-middleware');

const app = express();
app.use(cookieParser());

router.get('/post', async (req, res) => {
    const posts = await post.findALL({ order: [['postId', 'desc']] });

    res.json({ posts: posts });
});

router.get('/posts/:_postId', async (req, res) => {
    const { _postId } = req.params;
    const data = await post.findOne({ where: { postId: _postId } });

    res.status(200).json({ data });
});

router.post('/posts', authMiddleWare, async (req, res) => {
    const { title, content } = req.body;
    const user_id = res.locals.user.userId;

    await post.create({
        title, contenet, user_id
    });

    res.status(200).json({ "message": '게시글 작성에 성공하였습니다.' });
});

router.put('/posts/:_postId', authMiddleWare, async (req, res) => {
    const { _postId } = req.params;
    const { title, content } = req.body;

    const data = await post.findOne({ where: { postId: _postId } });

    if (data === null) {
        res.status(400).json({ "errorMessage": '게시글 조회에 실패하였습니다.' });
        return;
    }

    await post.update(
        { title: title, content: content },
        { where: { postId: _postId } }
    );
    res.status(200).json({ "message": '게시글을 수정하였습니다.' });
});

router.delete('/posts/:postId', authMiddleWare, async (req, res) => {
    const { _postId } = req.params;
    const deletePost = await post.findOne({ where: { postId: _postId } });

    if (deletePost) {
        await post.destroy({ where: { postId: _postId } });
    }
    res.status(200).json({ "message": '게시글을 삭제하였습니다.' });
});

module.exports = router;