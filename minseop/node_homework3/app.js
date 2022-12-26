const { Op, Sequelize } = require('sequelize');
const { User } = require('./models');

const cookieparser = require('cookie-parser');
const crypto = require('crypto');

const jwt = require('jsonwebtoken');

const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json(), cookieparser());

const postRouter = require('./router/post');
app.use('/api', postRouter);

// 회원가입
router.post('/users', async (req, res) => {
  const { nickname, password, email, confirmPassword } = req.body;

  // // 조건 검사
  let regExp = /^[a-zA-Z0-9]{3,}$/g;
  if ( regExp.test(nickname) === false ) {
    if ( nickname.length < 3 )
      return res.status(400).json({
        errorMessage: '닉네임은 최소 3글자 이상.',
      });
    return res.status(400).json({
      errorMessage: '닉네임은 알파벳과 숫자로.',
    });
  }

  regExp = new RegExp(`^((?!${nickname}).){4,}$`, 'g');
  if ( regExp.test(password) === false ) {
    if ( password.length < 4 )
      return res.status(400).json({
        errorMessage: '비밀번호는 최소 4자 이상.'
      });

    return res.status(400).json({
      errorMessage: '닉네임과 같은 값이 비밀번호에 포함 됐습니다.'
    });
  }

  // pw에 닉네임이 포함
  // if (password === nickname || password.indexOf(nickname) !== -1) {
  //     console.log(password.indexOf(nickname))
  //     res.status(402).json({
  //         errorMessage: "패스워드에 닉네임이 포함되어 있습니다."
  //     })
  //     return
  // }

  // pw 불일치
  if ( password !== confirmPassword ) {
    res.status(402).json({
      // assets/register/error: function (error)
      errorMessage: '비밀번호 불일치',
    });
    return;
  }

  // db에 일치하는 정보 찾기
  const existUser = await User.findOne({
    where: {
      [Op.or]: [ { nickname }, { email } ],
    },
  });
  try {
    // 닉네임 중복
    if ( existUser.nickname === nickname ) {
      // console.log("exist Nickname In")
      res.status(402).json({
        errorMessage: '중복된 닉네임입니다.',
      });
      return;
    }

    // 이메일 중복
    if ( existUser.email === email ) {
      // console.log("exist email In")
      res.status(402).json({
        errorMessage: '이미 사용중인 Email.',
      });
      return;
    }
  } catch ( error ) {
    await User.create({ email, nickname, password });
  }
  res.status(201).send({});
});

// 로그인

router.post('/auth', async (req, res) => {
  const { nickname, password } = req.body;

  const user = await User.findOne({
    where: {
      nickname,
    },
  });

  if ( !user || password !== user.password ) {
    res.status(412).send({
      msg: '닉네임 또는 패스워드를 확인해주세요',
    });
    return;
  }

  const token = jwt.sign(
    {
      userId: user.userId,
    },
    'minseop-key',
    { expiresIn: '10m' },
  );
  res.status(200).cookie('token', token).send({ token: token });
  // res.status(200).send({token:token});
});

app.use('/api', express.urlencoded({ extended: false }), router);
app.use(express.static('assets'));

app.listen(8080, () => {
  console.log('서버가 요청을 받을 준비가 됐어요');
});

//npm run dev
