const express = require("express");
const router = express.Router();
const authmiddleware = require("../middleware/auth-middleware");

const UserViewController = require("../controllers/user_view.controller");
const userViewController = new UserViewController();

router.get("/my_wash_list", authmiddleware, userViewController.getUserViewById);

module.exports = router;
