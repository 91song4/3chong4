const loginRepository = require("../repositories/login_shop.repository");
const jwt = require("jsonwebtoken");

class loginService {
  loginRepository = new loginRepository();

  finduser = async (shop_name, password) => {
    const finduser = await this.loginRepository.finduser(shop_name, password);
    return { shop_id: finduser.shop_id };
  };

  findtoken = async (shop_id) => {
    const token = jwt.sign(shop_id, "customized-secret-key", {
      expiresIn: "15m",
    });
    return { token: token };
  };
}

module.exports = loginService;
