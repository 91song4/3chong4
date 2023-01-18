const express = require('express');
const router = express.Router();

const AuthController = require("../../controllers/auth.controller");
const authController = new AuthController();

const authMiddleware = require("../../middlewares/auth_middleware");