const express = require("express");
const router = express.Router();

const Post = require("../schemas/post")

router.get("/posts", async (req, res) => {
    const dbdata = await Post.find()
    res.json({ data: dbdata })
});

router.get("/posts/:postsid", async (req, res) => {
    const { postsid } = req.params;
    const dbdata = await Post.find()
    const [bora] = dbdata.filter((x) => {
        return x["_id"].toString() === postsid;
    }); //테스트
    res.json({ bora });
});

router.post("/posts", async (req, res) => {
    const { title, name, password, contents } = req.body;
    await Post.create({ title: title, name: name, password: password, contents: contents })

    res.status(200).json({ "message": "게시글을 생성하였습니다." });
});

router.put("/posts/:postsid", async (req, res) => {
    const { postsid } = req.params;
    const { title, password, contents } = req.body;
    const [edit] = await Post.find({ _id: postsid })
    if (edit.password === password) {
        await Post.updateOne({ title, contents });
    } else {
        return res.status(400).json({"message": "비밀번호가 틀렸습니다."});
    };


    res.status(200).json({ "message": "게시글을 수정하였습니다." });
});

router.delete("/posts/:postsid", async (req,res) => {
    const { postsid } = req.params;
    const { password } = req.body;
    const [del] = await Post.find({ _id: postsid });
    if (del.password === password) {
        await Post.deleteOne({_id:postsid})
    } else {
        return res.status(400).json({"message": "비밀번호가 틀렸습니다."})
    };

    res.status(200).json({"message": "게시글을 삭제하였습니다."});
});

module.exports = router;