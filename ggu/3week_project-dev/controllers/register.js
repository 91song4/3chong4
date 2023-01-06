const registerService = require('../services/register.service');

class RegisterController {
  regiService = new registerService();

  createRegister = async (req, res, next) => {
    const { nickname, password, phone_number, address } = req.body;
    console.log("1111", req.body);

    const createRegiData = await this.regiService.createuser(nickname, password, phone_number, address);
    console.log("레지스트 컨트롤러")
    res.status(201).json({ data: createRegiData });
  }

  editUser = async (req,res,next) => {
    const { nickname, password, phone_number, address } = req.body;

    const editUserData = await this.regiService.edituser(nickname,password,phone_number,address)
    res.status(222).json({ data:editUserData})

  }
}

module.exports = RegisterController;