const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/shopping-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const app = express();
const router = express.Router();

const User = require("./models/user");

// 회원가입
router.post("/users", async  (req, res) => {
  const {nickname, email, password, confirmPassword} = req.body;

  // 패스워드, 패스워드 검증 값이 일치하는가
  // email에 해당하는 사용자가 있는가
  // nickname에 해당하는 사용자가 있는가
  // DB에 데이터를 삽입

  if (password !== confirmPassword) {
    res.status(400).json({
      errorMessage: "패스워드가 패스워드 확인란과 다릅니다.",
    });
    return;
  }

  const exisUser = await User.findOne({
      $or: [{email: email}, {nickname: nickname}]
  })

  if(exisUser) {
      res.status(400).json({
          errorMessage: "email or nickname 사용중"
      })
      return
  }
  const user = new User({nickname, email, password});
  await user.save()

    res.status(201).json({})
});

// 로그인
router.post("/auth", async (req,res) =>{
    const {email, password} = req.body;

    const user = await User.findOne({email});

    // 사용자가 존재하지 않거나,
    // 입력 받은 pw와 사용자의 pw가 다를때 에러메세지지

    if (!user || password !== user.password) {
        res.status(400).json({
            errorMessage: "사용자가 존재하지 않거나, 사용자의 pw와 입력받은 pw가 일치하지않습니다."
        })
        return
    }
    const token = jwt.sign({userId: user.userId}, "sparta-secret-key")

    res.status(200).json({
        "token": token
    })
})




app.use("/api", express.urlencoded({ extended: false }), router);
app.use(express.static("assets"));

app.listen(8080, () => {
  console.log("서버가 요청을 받을 준비가 됐어요");
});