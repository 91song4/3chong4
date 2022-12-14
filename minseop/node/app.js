const express = require('express')  // require
const app = express()
const port = 3000

const postRouter = require('./routes/post.js')

app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('req.body 실행')
})

app.get("/", (req, res) => {
    console.log(req.query)
    res.send('req.query 실행')
})

app.get('/:id', (req, res) => {
    console.log(req.params)
    res.send(':id / req.params 실행')
})

// app.get('/', (req,res) => {
//     res.send('첫페이지 입니다')
// })

// 전역 미들웨어
// app.use("/post", postRouter)

app.listen(port, () => {
    console.log(port, '포트로 서버를 열었어요( app.listen )')
})