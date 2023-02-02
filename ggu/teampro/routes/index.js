const express = require("express");
const router = express.Router();

const productList = require("./productList.routes");
const paymentList = require("./paymentList.routes");
const adminProductList = require("./adminProductList.routes");
const memberList = require("./memberList.routes");

router.use(
    "/",
    productList,
    paymentList,
    adminProductList,
    memberList
),

module.exports = router;