const registerRepository = require('../repositories/register.repository');

class RegiService {
  regiRepository = new registerRepository();


  createuser = async (nickname, password, phone_number, address) => {

    const createRegiData = await this.regiRepository.createuser(nickname, password, phone_number, address);
    console.log("레지스트 서비스")
    return {
      user_id: createRegiData.null,
      nickname: createRegiData.nickname,
      password: createRegiData.password,
      phone_number: createRegiData.phone_number,
      address: createRegiData.address,
      createdAt: createRegiData.createdAt,
      updatedAt: createRegiData.updatedAt,
      point: createRegiData.point
    };
  }

  edituser = async (nickname,password,phone_number,address) => {
    const edituserdata = await this.regiRepository.edituser(nickname,password,phone_number,address)
    return {
      user_id: edituserdata.null,
      nickname: edituserdata.nickname,
      password: edituserdata.password,
      phone_number: edituserdata.phone_number,
      address: edituserdata.address,
      createdAt: edituserdata.createdAt,
      updatedAt: edituserdata.updatedAt,
      point: edituserdata.point
    }
  }

}

module.exports = RegiService;