const jwt = require("jsonwebtoken");
const { user } = require("../models");

module.exports = (req, res, next) => {
  const { cookie } = req.headers
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
    const userId = jwt.verify(authToken, "customized-secret-key");
    console.log(userId);
    console.log(userId.user_id);
    // let {user_id, iat, exp} = userId
    // let {user_id:a} = user_id
    // console.log("a : ", a);
    // console.log(userId);
    // console.log(user_id);

    user.findByPk(userId.user_id).then((user) => {
      res.locals.user = user.dataValues; 
      next();
    });

  } catch (err) {
    res.status(444).send({
      err: "로그인 중 에러가 발생하였습니다.",
    });
    console.log(err);
  }
  // 헤더에다가 쿠키를 넣고 토큰 값이 들어가있음.
  // 쿠키말고 isWho? 
};
