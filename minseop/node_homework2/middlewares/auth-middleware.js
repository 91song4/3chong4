// middlewares/auth-middleware.js

const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res, next) => {
  console.log(req.headers)
  const { authorization } = req.headers;
  const [authType, authToken] = authorization.split(" ");
  // authType: Bearer
  // authToken: 실제 jwt 값

  if (authType !== "Bearer" || !authToken){
    res.status(400).json({
      errorMessage: "authType !== \"Bearer\" || !authToken"
    })
    return;
  }
  try {
    // 복호화 및 검증
    const {userId} = jwt.verify(authToken, "minseop-key")
    const user = await User.findById(userId)
    res.locals.user = user;
    next();

  } catch (error) {   // key가 없으면 서버가 꺼진답
    res.status(400).json({
      errorMessage: "복호화 try catch 에러 "
    });
  }
  return;

  // const [authType, authToken] = (authorization || "").split(" ");
  //
  // if (!authToken || authType !== "Bearer") {
  //   res.status(401).send({
  //     errorMessage: "로그인 후 이용 가능한 기능입니다.",
  //   });
  //   return;
  // }
  //
  // try {
  //   const { userId } = jwt.verify(authToken, "customized-secret-key");
  //   User.findById(userId).then((user) => {
  //     res.locals.user = user;
  //     next();
  //   });
  // } catch (err) {
  //   res.status(401).send({
  //     errorMessage: "로그인 후 이용 가능한 기능입니다.",
  //   });
  // }
};