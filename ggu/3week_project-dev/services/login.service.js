const loginRepository = require("../repositories/login.repository");
const jwt = require("jsonwebtoken");

class loginService {
  loginRepository = new loginRepository();

  // userlogin = async (nickname, password) => {
  //   const user = await this.loginRepository.userlogin(nickname,password)
  //   if(user === null || password !== user.password) {
  //     return {
  //       errorMessage:"닉네임 또는 패스워드가 일치하지 않습니다."
  //     }
  //   }

  //   const token = await jwt.sign({nickname: nickname }, "customized-secret-key");
  //   console.log("로그인 서비스의 토큰" , token);

  //   return {token: token}

  // const acc_payload = {
  //   id: user.nickname,
  //   password: user.password
  // }
  // const ref_payload = {
  //   id: user.nickname,
  //   password: user.password
  // }
  // const access_token = jwt.token().access(acc_payload)
  // const refresh_token = jwt.token().access(ref_payload)
  // console.log("acc_payload:", acc_payload);
  // console.log("refresh_token:", refresh_token);

  //     try {
  // } catch(err) {
  //   console.log("에러난 이유:", err);
  //   return {errorMessage:"알 수 없는 에러가 발생하였습니다.(로그인)"}
  // }

  finduser = async (nickname, password) => {
    console.log("로그인 서비스단계에서의 닉네임", nickname);
    console.log("로그인 서비스단계에서의 패스워드", password);
    const finduser = await this.loginRepository.finduser(nickname, password);
    return { user_id: finduser.user_id };
  };

  findtoken = async (user_id) => {
    const token = jwt.sign(user_id, "customized-secret-key", {
      expiresIn: "15m",
    });
    return { token: token };
  };
}

module.exports = loginService;
