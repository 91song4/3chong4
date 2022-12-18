const express = require("express");
const cart = require("../schemas/cart");
const router = express.Router();

const Cart = require("../schemas/cart");
const Goods = require("../schemas/goods");

router.get("/carts", async(req,res) => {
    const carts = await Cart.find({});
    //[
    //     {goodsId, quantity},
    //     {goodsId, quantity},
    // ];
    const goodIds = carts.map((cart) => {
        return cart.goodsId;
    })
    //[2,11,1];

    const goods = await Goods.find({goodsId: goodIds});
    //Goods에 해당하는 모든 정보를 가지고 올건데,
    //만약 goodsIds 변수 안에 존재하는 값일 때에만 조회하라.

    const results = carts.map((cart) => {
        return {
            "quantity": cart.quantity,
            "goods": goods.find((item) => item.goodsId === cart.goodsId),
        }
    })

    res.json({
        "carts": results,
    })
});


module.exports = router;