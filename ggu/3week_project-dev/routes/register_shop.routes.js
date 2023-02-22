const express = require('express');
const router = express.Router();
const authmiddleware = require("../middleware/auth-middleware")

const regiController = require('../controllers/register_shop');
const registerController = new regiController();
router.post('/register_shop',registerController.createRegister);

module.exports = router;