const { express } = require("express");
const express = require("express");
const router = express.Router();

const ProductListController = require("../controllers/productList.controller");
const productListController = new ProductListController();

router.get(
    "/product",
    productListController.findProductAll
);

module.exports = router;