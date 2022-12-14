const express = require("express")
const router = express.Router();

// // localhost:3000/post/      예시자료
// router.get('/', (req,res) => {
//     res.send("res.send - post.js GET Method")
// })
//
// // localhost:3000/post/about 예시자료
// router.get('/about', (req,res) => {
//     res.send("res.send - post.js GET Method - /about")
// })

    const data = [
        {
            postId: "62d6d12cd88cadd496a9e54e",
            user: "Developer",
            title: "안녕하세요",
            createdAt: "2022-07-19T15:43:40.266Z"
        },
        {
            postId: "62d6cc66e28b7aff02e82954",
            user: "Developer",
            title: "안녕하세요",
            createdAt: "2022-07-19T15:23:18.433Z"
        }
    ]

router.get("/", (req, res) => {
    res.status(200).json({"data": data})
})

router.get('/:postsId', (req, res) => {
    const {postsId} = req.params

    const [result] = data.filter((post) => post.postId === postsId)
    console.log(result)
        
    res.status(200).json({detail: result})
})

module.exports = router