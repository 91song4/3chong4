const express = require("express");
const router = express.Router();

const productList = require("./productList.routes");
const paymentList = require("./paymentList.routes");

router.use(
    "/",
    productList,
    paymentList
),

module.exports = router;