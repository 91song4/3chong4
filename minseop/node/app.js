const express = require('express')  // require
const app = express()
const port = 3000

const postRouter = require('./routes/post.js')

app.get('/', (req,res) => {
    res.send('첫페이지 입니다')
})

// 전역 미들웨어
app.use("/post", postRouter)

app.listen(port, () => {
    console.log(port, '포트로 서버를 열었어요( app.listen )')
})