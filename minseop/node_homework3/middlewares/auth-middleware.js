// middlewares/auth-middleware.js

const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    req.decode = jwt.verify(token, 'minseop-key');
    next();
  } catch ( err ) {
    res.status(401).json({
      msg: "로그인 해주세염"
    });
  }

  // try {
  //   // 복호화 및 검증
  //   const { userId } = jwt.verify(authToken, 'minseop-key');
  //   User.findByPk(userId).then((user) => {
  //     res.locals.user = user;
  //     next();
  //   });
  // } catch (error) {
  //   // key가 없으면 서버가 꺼진답
  //   console.log(error);
  //   res.status(400).json({
  //     errorMessage: '복호화 try catch 에러 ',
  //   });
  // }
};
