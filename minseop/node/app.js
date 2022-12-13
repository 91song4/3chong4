const express = require('express')
const app = express()
const port = 3000
const goodsRouter = require('./routes/goods')
            //리퀘스트 = 요청   , 리스폰스 = 응답
// app.get('/',(req,res) => {
//   res.send("hello world")
// })

// localhost:3000/api -> goodsRouter
app.use("/api", goodsRouter)

app.listen(port,() => {
  console.log(port, '포트로 서버가 열렸어요')
})











// function sum (){
//   console.log("hello")
// }
//
// function (a,b) {
//   return a+b
// }
//
// (a,b)=> {
//   return a+b
// }

// console.log(1234)
// console.log(setTimeout(() => {
//   console.log("hello2222")
// },1000))