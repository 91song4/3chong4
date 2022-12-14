const express = require('express')  // require
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('첫페이지 입니다')
})

app.listen(port, () => {
    console.log(port, '포트로 서버를 열었어요( app.listen )')
})