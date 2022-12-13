const express = require('express');
const router = express.Router();
const Goods = require("../schemas/goods");

router.post("/goods", async (req, res) => {
    const { goodsId, name, thumbnailUrl, category, price } = req.body;
    const goods = await Goods.find({ goodsId });
    if (goods.length) {
        return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
    }

    const createdGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });

    res.json({ goods: createdGoods });
});

//상품 목록 조회 API
// router.get("/goods", (req, res) => {
//     res.json({ goods: goods });
// });

//상품 상세 조회 API
// router.get("/goods/:goodsId", (req, res) => {
//     const { goodsId } = req.params;
//     const [detail] = goods.filter((goods) => goods.goodsId === Number(goodsId));
//     res.json({ detail });
// });

module.exports = router;