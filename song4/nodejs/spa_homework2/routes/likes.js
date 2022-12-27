const express = require("express");
const { Op } = require("sequelize");

const { Like } = require("../models");
const { Post } = require("../models");

const { auth_middleware } = require("./index.js");

const router = express.Router();

router.put('/', auth_middleware, async (req, res) => {
    const postId = res.locals.postId;
    const user = res.locals.user;

    const test = await Like.findOne({
        where: [
            { postId },
            { userId: user.userId }
        ]
    })
    console.log('test', test);
    console.log('user', user);
    if (!test) {
        await Like.create({ postId, userId: user.userId });
        await Post.increment({ likes:1  }, { where: { postId } });
        
        return res.status(200).json({ message: "게시글의 좋아요를 등록하였습니다." });
    }
    
    await Like.destroy({ where: [{ postId }, { userId: user.userId }] });
    await Post.increment({ likes:-1  }, { where: { postId } });
    return res.status(200).json({ message: "게시글의 좋아요를 취소하였습니다." });
})

module.exports = router;