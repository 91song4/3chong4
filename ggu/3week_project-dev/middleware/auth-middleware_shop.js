const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router(); //
const { shop } = require("../models");
const cookieParser = require("cookie-parser"); //

router.use(cookieParser()); //

module.exports = (req, res, next) => {
  const { cookie } = req.headers;
  const [authType, authToken] = (cookie || "").split("=");


  if (!authToken || authType !== "token") {
    console.log("[2]로그인 정보 없을때 쿠키:", cookie);
    console.log("[2]authToken:", authToken);
    res.status(443).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다.",
    });
    return;
  }

  try {

    console.log("[1]authToken:", authToken);
    const shopId = jwt.verify(authToken, "customized-secret-key");
    // let {shop_id, iat, exp} = shopId
    // let {shop_id:a} = shop_id
    // console.log("a : ", a);
    // console.log(shop_id);
    // console.log(shopId);

    shop.findByPk(shopId.shop_id).then((shop) => {
      res.locals.user = shop.dataValues;
      console.log(res.locals.user);
      next();
    });
  } catch (err) {
    res.status(444).send({
      err: "로그인 중 에러가 발생하였습니다.",
    });
    console.log(err);
  }
};
