const express = require("express")
const router = express.Router();

const Comments = require('../schemas/comments.js')
const Posts = require('../schemas/posts.js')

router.get("/comments/:_postId", async (req, res) => {
    const comments = await Posts.find({});
})

module.exports = router