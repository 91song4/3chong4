const express = require('express');
const router = express.Router();
const Post = require('../schemas/post.js');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const dbUtcToKst = require('./index.js');


// 게시글 작성
router.post('/', async (req, res) =>
{
    const { user, password, title, content } = req.body;
    try
    {
        await Post.create({ user, password, title, content });
        res.status(200).json({ message: "게시글을 생성하였습니다." });
    } catch {
        res.status(400).json({ message: "데이터 형식이 올바르지 않습니다." });
    }
})


// 게시글 조회
router.get('/', async (req, res) =>
{
    const posts = await Post.aggregate([
        { $match: {} },
        {
            $project: {
                _id: 0,
                postId: "$_id",
                user: "$user",
                title: "$title",
                createdAt: "$createdAt",
            }
        },
        { $sort: { createdAt: -1 } },
    ]);
    dbUtcToKst(posts);    // UTC to KST

    
    res.status(200).json({ data: posts });
})


// 게시글 상세 조회
router.get('/:_postId', async (req, res) =>
{
    const postId = req.params._postId;
    try
    {
        const post = await Post.aggregate([
            { $match: { _id: new ObjectId(postId) } },
            {
                $project: {
                    _id: 0,
                    postId: "$_id",
                    user: "$user",
                    title: "$title",
                    content: "$content",
                    createdAt: "$createdAt",
                }
            },
        ])
        dbUtcToKst(post);    // UTC to KST

        res.status(200).json({ data: post });
    } catch {
        res.status(400).json({ message: "데이터 형식이 올바르지 않습니다." });
    }
})


// 게시글 수정
router.put('/:_postId', async (req, res) =>
{
    const postId = req.params._postId;
    const { password, title, content } = req.body;
    if (password && title && content)
    {
        const [post] = await Post.find({ _id: postId });
        if (post)
        {
            if (post.password === parseInt(password))
            {
                await Post.updateOne({ _id: postId }, { $set: { title, content } })
                res.status(200).json({ message: "게시글을 수정하였습니다." })
            }
            else
            {
                res.status(404).json({ message: "비밀번호가 틀립니다." })
            }
        }
        else
        {
            res.status(400).json({ message: "게시글 조회에 실패하였습니다." });
        }
    }
    else
    {
        res.status(400).json({ message: "데이터 형식이 올바르지 않습니다." });
    }

})


// 게시글 삭제
router.delete('/:_postId', async (req, res) =>
{
    const postId = req.params._postId;
    const { password } = req.body;
    if (password)
    {
        const [post] = await Post.find({ _id: postId });
        if (post)
        {
            if (post.password === parseInt(password))
            {
                await Post.deleteOne({ _id: postId });
                res.status(200).json({ message: "게시글을 삭제하였습니다." });
            }
            else
            {
                res.status(404).json({ message: "비밀번호가 틀립니다." })
            }
        }
        else
        {
            res.status(400).json({ message: "게시글 조회에 실패하였습니다." });
        }
    }
    else
    {
        res.status(400).json({ message: "데이터 형식이 올바르지 않습니다." });
    }
})

module.exports = router;