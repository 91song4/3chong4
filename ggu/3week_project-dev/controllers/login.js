const loginService = require('../services/login.service');

class loginController {
  logService = new loginService();

  getlogin = async (req, res, next) => {
    const { nickname, password } = req.body;
    console.log("컨트롤러 단계에서의 닉네임", nickname);
    console.log("컨트롤러 단계에서의 패스워드", password);

    if(!nickname || !password) {
      return res.status(400).json({errorMessage: "닉네임과 비밀번호를 입력해주세요."})
    }
    
    try {
      const loginData = await this.logService.finduser(nickname, password)
      const {token} = await this.logService.findtoken(loginData)
      console.log("1:", loginData);
      console.log("2:", token);

      res.cookie("token", token);
      res.status(201).json({token: token})
      next
      return
    } catch(err) {
      return res.status(445).json({errorMessage: " 로그인 실패 에러!!"})
    }

    // const loginData = await this.logService.userlogin(nickname, password);
    // console.log("로그인 컨톨러의 토큰:", loginData);
    // res.cookie("token", loginData);
    // res.status(201).json({ token: loginData });
    // // return
  }
}

module.exports = loginController;