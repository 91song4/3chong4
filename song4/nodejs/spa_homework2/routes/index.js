const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { User } = require('../models');

async function setPasswordToHash(req, res, next) {
  console.log('setPasswordToHash() access');
  const { nickname, password } = req.body;
  const userObject = await User.findOne({
    where: { nickname },
  });

  if (userObject === null) {
    return res.status(400).json({
      errorMessage: '이메일을 확인해주세요.',
    });
  }
  const user = userObject.dataValues;
  const hash = crypto
    .createHash('sha512')
    .update(password + user.salt)
    .digest('hex');

  req.body.password = hash;
  res.locals.user = user;
  console.log('setPasswordToHash -> next()');
  next();
}

function validateToken(token) {
  try {
    const userId = jwt.verify(token, 'SecretKey');
    return userId;
  } catch (err) {
    return false;
  }
}

async function auth_middleware(req, res, next) {
  console.log('토큰 검증API');
  const token = req.cookies.jwt;

  try {
    const isAvailableToken = validateToken(token);
    if (!(isAvailableToken === false)) {
      const { userId } = isAvailableToken;
      User.findByPk(userId).then((user) => {
        res.locals.user = user.dataValues;
        next();
      });
    } else {
      throw new Error('검증 실패');
    }
  } catch (err) {
    console.error(err, 'error:');
    res.status(400).json({ errorMessage: '로그인이 필요합니다.' });
  }
}

function getPostId(req, res, next) {
  console.log('commets set postId API');
  const temp = req.baseUrl.split('/');
  const tempLen = temp.length;
  const postId = Number(temp[temp.length - 2]);

  res.locals.postId = postId;
  next();
}

module.exports = {
  setPasswordToHash,
  auth_middleware,
  validateToken,
  getPostId,
};
