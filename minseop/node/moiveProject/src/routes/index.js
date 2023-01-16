const express = require("express")
const router = express.Router()

// 메인페이지
const homeRouter = require('./auth')

// 회원가입 , 로그인
const registerRouter = require('./auth/register.routers')
const loginRouter = require('./auth/login.routers')





router.use("/", homeRouter)


module.exports = router;