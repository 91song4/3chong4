const express = require('express');
const router = express.Router();

const logiController = require('../controllers/login');
const loginController = new logiController();

router.post('/auth',loginController.getlogin);

module.exports = router;

// router.post("/auth", async (req, res) => {
//     const { nickname, password } = req.body;
  
//     const user = await User.findOne({
//       where: { nickname: nickname },
//     });
  
//     // NOTE: 인증 메세지는 자세히 설명하지 않는것을 원칙으로 한다: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#authentication-responses
//     if (!user || password !== user.password) {
//       res.status(400).send({
//         errorMessage: "닉네임 또는 패스워드가 틀렸습니다.",
//       });
//       return;
//     }
//     const token = jwt.sign({ userId: user.userId }, "customized-secret-key");
//     res.cookie("token", token);
//     console.log("로그인 시 토큰:", token);
//     res.json({ token: token });
//   });

// 로그아웃 코드 localStorage.clear();
