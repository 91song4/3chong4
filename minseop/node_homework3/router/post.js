const express = require("express")
const {Post} = require("../models")


const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware")

// 게시글 리스트 조회
router.get("/posts", async (req, res) => {
    const data = await Post.findAll({
        attributes: ["postId","userId", "title","content", "createdAt","updatedAt"],
        order: [["createdAt","DESC"]]
    })
    res.status(200).json({data})
});

// 게시글 작성
router.post("/posts" , authMiddleware, async (req,res) => {
    const {userId} = res.locals.user;
    console.log("@@@@@@@@@@@@@@@@@",userId)
    const {title,content} = req.body;

try {
    await Post.create({title, content,userId});
    res.status(200).send("게시물 작성 완료")
}catch (err) {
    res.send("작성실패")
    console.log(err)
}
});

// 게시글 상세조회
router.get("/posts/:postId", async (req,res)=> {
    const {postId} = req.params;

    const data = await Post.findOne({
        attributes: ["postId","userId", "title","content", "createdAt","updatedAt"],
        where: {postId}
    });
    res.status(200).json({data})
})

// 게시글 수정
router.put("/posts/:postId", async (req, res) =>{
    const {postId} = req.params;
    const {title, content} = req.body;

    if (!title || !content) {
        return res.status(412).json({
            msg: "데이터 형식이 올바르지 않습니당"
        });
    }

    if (title === "") {
        return res.status(412).json({
            msg: "제목을 입력해주세요"
        });
    }

    if (content === "") {
        return res.status(412).json({
            msg: "내용을 입력해주세요"
        });
    }
    const data = await Post.update(
        {title,content},
        {where: {postId}
    });

    //update(
    // { item1, item2, item3},
    // {where:{ ... }}
    // )
    res.status(200).json({
        msg: "수정완료"
    })

});

// 게시글 삭제

module.exports = router;