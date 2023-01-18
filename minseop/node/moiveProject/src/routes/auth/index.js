const express = require('express');
const router = express.Router();

const AuthController = require("../../controllers/auth.controller");
const authController = new AuthController();

const authMiddleware = require("../../middlewares/auth_middleware");

// 메인 페이지
router.get('/', authMiddleware, authController.getPage_homePage);

// 회원가입 페이지


module.exports = router;