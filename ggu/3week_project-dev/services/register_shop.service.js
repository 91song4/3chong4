const registerRepository = require('../repositories/register_shop.repository');

class RegiService {
  regiRepository = new registerRepository();


  createuser = async (shop_name, password, shop_number, address) => {

    const createRegiData = await this.regiRepository.createuser(shop_name, password, shop_number, address);
    console.log("레지스트 서비스")
    return {
      shop_id: createRegiData.null,
      shop_name: createRegiData.shop_name,
      password: createRegiData.password,
      shop_number: createRegiData.shop_number,
      address: createRegiData.address,
      createdAt: createRegiData.createdAt,
      updatedAt: createRegiData.updatedAt,
      point: createRegiData.point,
      shop_status: createRegiData.shop_status,
    };
  }
}

module.exports = RegiService;