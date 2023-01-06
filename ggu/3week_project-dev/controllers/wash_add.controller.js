const WashAddService = require("../services/wash_add.services");

class WashAddController {
  washAddService = new WashAddService();
  // 세탁물 추가
  washAdd = async (req, res, next) => {
    const { user_id } = res.locals.user;
    const { image, nickname, address, phone_number, extra } = req.body;
    const washAddData = await this.washAddService.washAdd(
      user_id,
      image,
      nickname,
      address,
      phone_number,
      extra
    );
    res.status(201).json({ data: washAddData });
  };
}

module.exports = WashAddController;
