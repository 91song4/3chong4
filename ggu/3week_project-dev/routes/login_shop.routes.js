const express = require('express');
const router = express.Router();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const authmiddleware = require("../middleware/auth-middleware")

const { Op } = require("sequelize");
const { User } = require("../models");

const logiController = require('../controllers/login_shop');
const loginController = new logiController();
router.post('/auth_shop',loginController.getlogin);

module.exports = router;
