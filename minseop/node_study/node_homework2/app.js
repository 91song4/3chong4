const express = require("express");
const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

const { Server } = require("http");
const socketIo = require("socket.io");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/shopping-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const app = express();

const http = Server(app);
const io = socketIo(http);

const router = express.Router();


// 회원가입
const User = require("./models/user");
router.post("/users", async (req, res) => {
  const { nickname, password, email, confirmPassword } = req.body;

  // // ID 형식 비정상
  // if (typeof nickname !== String) {
  //     console.log("닉네임 스트링")
  //     console.log(typeof nickname)
  //     res.status(412).json({
  //         errorMessage: "ID의 형식이 일치하지 않습니다."
  //     })
  //     return
  // }
  //
  // //pw 형식 비정상
  // if (password !== String) {
  //     console.log("패스워드 스트링")
  //     res.status(412).json({
  //         errorMessage: "password의 형식이 일치하지 않습니다."
  //     })
  //     return
  // }

  // pw에 닉네임이 포함
  if ( password === nickname || password.indexOf(nickname) !== -1 ) {
    console.log(password.indexOf(nickname));
    res.status(402).json({
      errorMessage: "패스워드에 닉네임이 포함되어 있습니다."
    });
    return;
  }

  // pw 불일치
  if ( password !== confirmPassword ) {
    res.status(402).json({
      // assets/register/error: function (error)
      errorMessage: "비밀번호 불일치"
    });
    return;
  }


  // db에 일치하는 정보 찾기
  const existUser = await User.findOne({
    $or: [ { email: email }, { nickname: nickname } ]
  });

  try {

    // 닉네임 중복
    if ( existUser.nickname === nickname ) {
      // console.log("exist Nickname In")
      res.status(402).json({
        errorMessage: "중복된 닉네임입니다."
      });
      return;
    }

    // 이메일 중복
    if ( existUser.email === email ) {
      // console.log("exist email In")
      res.status(402).json({
        errorMessage: "이미 사용중인 Email."
      });
      return;
    }

  } catch ( error ) {

    const user = new User({ nickname, email, password });
    await user.save();
    console.log("회원가입 catch", error);
  }

  res.status(201).json({});
});

// 로그인
router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if ( !user || password !== user.password ) {
    res.status(412).json({
      errorMessage: "닉네임 또는 패스워드를 확인해주세요"
    });
    return;
  }

  const token = jwt.sign({ userId: user.userId }, "minseop-key");
  res.cookie("token", token).json({ token });
  // res.status(200).json({
  //     token: token
  // })

});


const authMiddleware = require("./middlewares/auth-middleware");
router.get("/users/me", authMiddleware, async (req, res) => {
  res.json({ user: res.locals.user });
});


app.use("/api", express.urlencoded({ extended: false }), router);
app.use(express.static("assets"));

io.on('connection', (sock) => {
  console.log('새로운 소켓이 연결 되었습니다 ');

  // 데이터를 전달
  io.emit("BUY_GODDS", {
    nickname: '서버가 보내준 구매자 닉네임',
    goodsId: 10, // 서버가 보내준 상품 데이터 고유 ID
    goodsName: '서버가 보내준 구매자가 구매한 상품 이름',
    date: '서버가 보내준 구매 일시'
  });


  sock.on('disconnenct', () => {
    console.log(sock.id, `${sock.id}사용자가 연결이 끊어졌습니당`);
  });
});

http.listen(8080, () => {
  console.log("서버가 요청을 받을 준비가 됐어요");
});

//npm run dev