const express = require("express")
const Comments = require('../schemas/comments.js')
const Posts = require('../schemas/posts.js')
const router = express.Router();

// 댓글 생성
router.post("/comments/:_postId", async (req, res) => {
    const {_postId} = req.params
    const {user, password,content} = req.body

    if (!user || !password || !content) {
        return res.status(400).json({
                success: false,
                message: "(댓글)데이터 형식이 올바르지 않습니다."
        })
    }
    if (!content) {
        return res.status(400).json({
            success: false,
            message: '댓글 내용을 입력해주세요.'
        })
    }
    const createdComments = await Comments.create({user, password,  content})
    res.status(201).json({comments: createdComments})
})

// 댓글 조회
router.get("/comments/:_postId", async (req,res) =>{
    const {_postId} = req.params

    const existsPosts = await Comments.findOne({_id: _postId})
    res.status(200).json({existsPosts})
})

// 댓글 수정

// 댓글 삭제


module.exports = router