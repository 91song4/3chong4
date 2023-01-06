const { shop } = require('../models');

class loginRepository {

    finduser = async (shop_name, password) => {
    console.log("로그인 레포지토리");
    console.log("매장명:", shop_name);
    
    const exuser = await shop.findOne({
      where: { shop_name: shop_name },
    })
    return exuser
  }
}

module.exports = loginRepository;