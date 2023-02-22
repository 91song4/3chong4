const express = require("express");
const router = express.Router();

const regiRouter = require("./register.routes");
const ownerWashRouter = require("./owner_wash.routes");
const washList = require("./washList.routes");
const loginRouter = require("./login.routes");
const testRouter = require("./test.routes");
const regiShopRouter = require("./register_shop.routes");
const loginShopRouter = require("./login_shop.routes");
const reviewRouter = require("./review.router");
const washAddRouter = require("./wash_add.routes");
const userViewRouter = require("./user_view.routes");
const authMiddleware = require("../middleware/auth-middleware");
const shopmiddleware = require("../middleware/auth-middleware_shop");
router.use(
  "/",
  regiRouter,
  loginRouter,
  testRouter,
  regiShopRouter,
  ownerWashRouter,
  washList,
  loginShopRouter,
  reviewRouter,
  washAddRouter,
  userViewRouter,
);

router.get('/auth/me', authMiddleware, async(req,res) => {
  res.json({result:"success" , user: res.locals.user})
})

router.get('/auth_shop/me', shopmiddleware, async(req,res) => {
  res.json({result:"success" , user: res.locals.user})
})


module.exports = router;
