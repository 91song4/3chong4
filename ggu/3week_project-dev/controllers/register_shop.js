const registerService = require('../services/register_shop.service');

class RegisterController {
  regiService = new registerService();

  createRegister = async (req, res, next) => {
    const { shop_name, password, shop_number, address } = req.body;

    const createRegiData = await this.regiService.createuser(shop_name, password, shop_number, address);
    console.log("레지스트 컨트롤러")
    res.status(201).json({ data: createRegiData });
  }
}

module.exports = RegisterController;