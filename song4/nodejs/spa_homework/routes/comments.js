const express = require('express');
const router = express.Router();
const Comment = require('../schemas/comment.js');
const Post = require('../schemas/post.js');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;


// 댓글 생성
router.post('/comments/:_postId', async (req, res) => {
    const postId = req.params._postId;
    const { user, password, content } = req.body;

    if ((await Post.find({ _id: postId })).length) {
        try {
            await Comment.create({ postId: new ObjectId(postId), user, password, content });
            res.status(200).json({ message: "댓글을 생성하였습니다." });
        } catch {
            if (!content)
                res.status(400).json({ message: "댓글 내용을 입력해주세요." });
            else
                res.status(400).json({ message: "데이터 형식이 올바르지 않습니다." });
        }
    }
    else
        res.status(400).json({ message: "데이터 형식이 올바르지 않습니다." });
})


// 댓글 목록 조회
router.get('/comments/:_postId', async (req, res) => {
    const postId = req.params._postId;
    try {
        const comment = await Comment.aggregate([
            { $match: { postId: new ObjectId(postId) } },
            {
                $project: {
                    _id: 0,
                    commentId: "$_id",
                    user: "$user",
                    content: "$content",
                    createdAt: "$createdAt",
                }
            }
        ])
        res.status(200).json({ data: comment });
    }
    catch {
        res.status(400).json({ message: "데이터 형식이 올바르지 않습니다." });
    }
})


// 댓글 수정
router.put('/comments/:_commentId', async (req, res) => {
    const commentId = req.params._commentId;
    const { password, content } = req.body;
    if (password && content) {
        if ((await Comment.find({ _id: commentId })).length) {
            await Comment.updateOne({ _id: commentId }, { $set: { password, content } });
            res.status(200).json({ message: "댓글을 수정하였습니다." });
        }
        else {
            res.status(400).json({ message: "댓글 조회에 실패하였습니다." });
        }
    }
    else if (password) {
        res.status(400).json({ message: "댓글 내용을 입력해주세요." });
    }
    else {
        res.status(400).json({ message: "데이터 형식이 올바르지 않습니다." });
    }
})


// 댓글 삭제
router.delete('/comments/:_commentId', async (req, res) => {
    const commentId = req.params._commentId;
    const { password } = req.body;
    if (password) {
        const [comment] = await Comment.find({ _id: commentId });
        if (comment) {
            if (comment.password === parseInt(password)) {
                await Comment.deleteOne({ _id: commentId });
                res.status(200).json({ data: '댓글을 삭제하였습니다.' });
            }
            else {
                res.status(404).json({ message: "비밀번호가 다릅니다." });
            }
        }
        else {
            res.status(404).json({ message: "댓글 조회에 실패하였습니다." });
        }
    }   
    else {
        res.status(400).json({ message: "데이터 형식이 올바르지 않습니다." });
    }
})

module.exports = router;