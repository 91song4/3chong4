const WashAddRepository = require("../repositories/wash_add.repository");
const { wash } = require("../models");

class WashAddService {
  WashAddRepository = new WashAddRepository(wash);
  // 세탁물 추가
  washAdd = async (user_id, image, nickname, address, phone_number, extra) => {
    const userData = await this.WashAddRepository.findUser(
      nickname,
      address,
      phone_number
    );
    const washData = await this.WashAddRepository.washAdd(
      user_id,
      image,
      userData.nickname,
      userData.address,
      userData.phone_number,
      extra
    );
    return {
      image: washData.image,
      nickname: washData.nickname,
      address: washData.address,
      phone_number: washData.phone_number,
      extra: washData.extra,
    };
  };
}

module.exports = WashAddService;
